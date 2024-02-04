#!/bin/bash

# Text file containing relative paths
input_file="missing_date_paths.txt"

# Destination directory
destination_directory="no_date"

# Create the destination directory if it doesn't exist
mkdir -p "$destination_directory"

# Loop through each relative path in the text file
while IFS= read -r relative_path; do
    # Check if the file exists before moving
    if [ -e "$relative_path" ]; then
        # Move the file to the destination directory
        mv "$relative_path" "$destination_directory/"
        echo "Moved: $relative_path"
    else
        echo "File not found: $relative_path"
    fi
done < "$input_file"

