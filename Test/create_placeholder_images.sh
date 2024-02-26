#!/bin/bash

quality=15
blur=10

# Function to display script usage
usage() {
  echo "Usage: $0 [OPTIONS]"
  echo "Options:"
  echo " -h, --help          Display this help message"
  echo " -s, --single        Specify if a single photo is being used and it's path"
  echo " -m, --multiple      Specify if multiple photos are being changed and the directory they are all in, this function will change all photos in that directory"
  echo " -b, --blur          Blur specification for all photos being converted, standard is 10, should be a number between 0 and 100"
  echo " -q, --quality       Quality specification all photos being converted, standard is 15, should be a number between 0 and 100"
  echo " -d, --destination   Specify the destination directory that the photo(s) should be placed into"
}

has_argument() {
  [[ ("$1" == *=* && -n ${1#*=}) || (! -z "$2" && "$2" != -*) ]]
}

extract_argument() {
  echo "${2:-${1#*=}}"
}

if [ $# -eq 0 ]; then
  echo "The --single or --multiple argument must be specified for the program to be run"
  usage
  exit 1
fi

# Handle options and arguments
while [ $# -gt 0 ]; do
  case $1 in
  -h | --help)
    usage
    exit 0
    ;;
  -s* | --single*)
    if ! has_argument $@; then
      echo "A single photo has not been specified" >&2
      usage
      exit 1
    fi
    file_name=$(extract_argument $@)
    shift
    ;;
  -m* | --multiple*)
    if ! has_argument $@; then
      echo "A multiple photo source folder has not been specified" >&2
      usage
      exit 1
    fi
    dir_name=$(extract_argument $@)
    shift
    ;;
  -b* | --blur*)
    if ! has_argument $@; then
      echo "Blur not specified" >&2
      usage
      exit 1
    fi
    blur=$(extract_argument $@)
    shift
    ;;
  -q* | --quality*)
    if ! has_argument $@; then
      echo "Quality not specified" >&2
      usage
      exit 1
    fi
    quality=$(extract_argument $@)
    shift
    ;;
  -d* | --destination*)
    if ! has_argument $@; then
      echo "Destination folder not specified" >&2
      usage
      exit 1
    fi
    destination_dir=$(extract_argument $@)
    shift
    ;;
  *)
    echo "Invalid option: $1" >&2
    usage
    exit 1
    ;;
  esac
  shift
done

if [ ! -z ${file_name+x} ] && [ ! -z ${dir_name+x} ]; then
  echo "The --single and --multiple options can not be used at the same time, please use only one" >&2
  usage
  exit 1
elif [ -z ${file_name+x} ] && [ -z ${dir_name+x} ]; then
  echo "The --single or --multiple argument must be specified for the program to be run"
  usage
  exit 1
fi

if [ ! -z ${file_name+x} ]; then
  file_name_base=$(basename "$file_name")
  if [ -z ${destination_dir+x} ]; then
    destination_dir=$(dirname "$file_name")
  fi

  file_name_no_ext="${file_name_base%.*}"

  file_path="${destination_dir}/${file_name_no_ext}_Placeholder.jpg"
  if [ -f "$file_path" ]; then
    rm "$file_path"
  fi

  convert "${file_name}" -blur "0x${blur}" -quality ${quality} "$file_path"
fi

# Function to update the progress bar
update_progress() {
    progress=$((processed_files * 100 / total_files))
    echo -ne "Progress: ["
    for ((i = 0; i < progress / 2; i++)); do echo -ne "#"; done
    for ((i = progress / 2; i < 50; i++)); do echo -ne "."; done
    echo -ne "] $progress% ($processed_files/$total_files files)\r"
}

if [ ! -z ${dir_name+x} ]; then

  dir_name="${dir_name%/}"

  if [ -z ${destination_dir+x} ]; then
    destination_dir="./${dir_name}_Placeholders"
  fi

  if [ ! -d "$destination_dir" ]; then
    mkdir -p "$destination_dir"
  fi

  # Get the total number of image files
  total_files=$(find "$dir_name" -type f \( -iname "*.jpg" -o -iname "*.dng" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.tiff" -o -iname "*.heic" \) | wc -l)

  # Initialize a counter for processed files
  processed_files=0
  
  # Loop through all image files recursively in the current directory
  find "$dir_name" -type f \( -iname "*.jpg" -o -iname "*.dng" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.tiff" -o -iname "*.heic" \) -print0 |
  while IFS= read -r -d '' file; do
    if [ -f "$file" ]; then
      file_name_base=$(basename "$file")
      file_name_no_ext="${file_name_base%.*}"
      file_ext="${file##*.}"

      file_path="${destination_dir}/${file_name_no_ext}_Placeholder.${file_ext}"

      # Remove existing file if it exists
      if [ -f "$file_path" ]; then
        rm "$file_path"
      fi

      # Convert and update progress bar
      convert "$file" -blur "0x${blur}" -quality ${quality} "$file_path"
      processed_files=$((processed_files + 1))
      update_progress
    fi
  done

  echo -e "\nConversion completed."
fi

