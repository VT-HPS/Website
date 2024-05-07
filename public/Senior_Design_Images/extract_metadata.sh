#!/bin/bash

# Output JSON file
output_file="Senior_Design.json"

# Output no date data file
lost_date_file="missing_date_paths.txt"

# Check if the file already exists and remove it
if [ -e "$output_file" ]; then
    rm "$output_file"
fi

# Check if the file already exists and remove it
if [ -e "$lost_date_file" ]; then
    rm "$lost_date_file"
fi

# Create the first outer boundary of the json file
echo "[" >> "$output_file"

# Get the total number of image files
total_files=$(find . -type f \( -iname "*.jpg" -o -iname "*.dng" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.tiff" -o -iname "*.heic" \) | wc -l)

# Initialize a counter for processed files
processed_files=0

id=1

# Function to update the progress bar
update_progress() {
    progress=$((processed_files * 100 / total_files))
    echo -ne "Progress: [$progress%] ["
    for ((i = 0; i < progress / 2; i++)); do echo -ne "="; done
    for ((i = progress / 2; i < 50; i++)); do echo -ne " "; done
    echo -ne "] $processed_files/$total_files files processed\r"
}

# Loop through all image files recursively in the current directory
find . -type f \( -iname "*.jpg" -o -iname "*.dng" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.tiff" -o -iname "*.heic" \) -print0 |
while IFS= read -r -d '' photo; do
    # Extract metadata using exiftool
    metadata=$(exiftool -json -CreateDate -FilePath "$photo")

    # Parse JSON to extract required information
    year=$(echo "$metadata" | jq -r '.[].CreateDate' | awk -F ':' '{print $1}' | tr -d '[:space:]')
    month=$(echo "$metadata" | jq -r '.[].CreateDate' | awk -F ':' '{print $2}' | tr -d '[:space:]')
    day=$(echo "$metadata" | jq -r '.[].CreateDate' | awk -F ':' '{print $3}' | tr -d '[:space:]' | sed 's/..$//')

    # Check if the variable "year" contains the word "null"
    # if [[ "$year" == *null* ]]; then
    #     echo "$photo" >> "$lost_date_file"
	
	# # Increment the processed files counter
    #     ((processed_files++))

    #     # Update the progress bar
    #     update_progress
	
	# continue
    # fi

    photo_base="${photo:2}"
    photo_no_ext="${photo_base%.*}"
    photo_ext="${photo_base##*.}"
    found_file=$(find "../Senior_Design_Images_Placeholders/" -type f -name "${photo_no_ext}_Placeholder.${photo_ext}")

    # Construct the JSON entry
    json_entry="{\"id\":\"$id\", \"image\":\"./Senior_Design_Images/${photo:2}\", \"placeholder\":\".${found_file:2}\", \"year\":\"$year\", \"month\":\"$month\", \"day\":\"$day\"},"

    # Append to the output JSON file
    echo "$json_entry" >> "$output_file"

    # Increment the id number
    ((id++))

    # Increment the processed files counter
    ((processed_files++))

    # Update the progress bar
    update_progress
done

# Remove the trailing comma from the last entry
sed -i '$ s/,$//' "$output_file"

# Create the last outer boundary of the json file
echo "]" >> "$output_file"

# Print a new line after the progress bar
echo

echo "JSON file generated: $output_file"
if [ -e "$lost_date_file" ]; then
    echo "No date paths generated: $lost_date_file"
fi
