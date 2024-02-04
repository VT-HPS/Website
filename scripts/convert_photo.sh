#!/bin/bash

# Destination directory for converted JPG files
output_directory="converted_photos"
old_photos_dir="old_photos"

# Create the output directory if it doesn't exist
mkdir -p "$output_directory"
mkdir -p "$old_photos_dir"

# Loop through HEIC and DNG files in the current directory
for photo in *.heic *.dng *.HEIC *.DNG; do
    if [ -e "$photo" ]; then
        # Construct the output filename with .jpg extension
        output_filename="${output_directory}/${photo%.*}.jpg"

        # Convert HEIC to JPG
        if [ "${photo##*.}" == "heic" ]; then
            convert "$photo" "$output_filename"
            echo "Converted: $photo to $output_filename"
        fi

        # Convert DNG to JPG
        if [ "${photo##*.}" == "dng" ]; then
            convert "$photo" "$output_filename"
            echo "Converted: $photo to $output_filename"
        fi
        # Convert DNG to JPG
        if [ "${photo##*.}" == "DNG" ]; then
            convert "$photo" "$output_filename"
            echo "Converted: $photo to $output_filename"
        fi
        
	# Convert HEIC to JPG
        if [ "${photo##*.}" == "HEIC" ]; then
            convert "$photo" "$output_filename"
            echo "Converted: $photo to $output_filename"
        fi
	
	mv "$photo" "$old_photos_dir"
    fi
done

