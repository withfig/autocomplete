#!/bin/bash

clear
echo 
echo 
# echo "$(tput setaf 4)What's the name of the CLI you want to create the Spec for?$(tput sgr0)"

read -e -p "What's the name of the CLI tool you want to create an autocomplete spec for: " USER_INPUT_CLI_TOOL

# Must put file path in quotes in case either variable has spaces
FILEPATH="$(pwd)/dev/$USER_INPUT_CLI_TOOL.ts"

# The actual name of the spec
SPEC_NAME="$(basename $USER_INPUT_CLI_TOOL)"

# If it's a nested path make sure the directory exists
mkdir -p "$(dirname $FILEPATH)"

# Check if the given file exists
if [[ -f "$FILEPATH" ]]; then
  echo
  echo "$(tput setaf 1)This completion spec already exists$(tput sgr0)"
  echo
  echo Start editing it from the $(tput bold)dev/$USER_INPUT_CLI_TOOL.ts$(tput sgr0) now!
  echo 
  exit 0
else 

  ## This is known as a here document (or heredoc)
  ## Using a hyphen between << and EOF will remove any indenting beforehand e.g. <<-EOF
    # https://stackoverflow.com/questions/4937792/using-variables-inside-a-bash-heredoc
  ## Using quotes around EOF will remove expansions
    # https://superuser.com/questions/1436906/need-to-expand-a-variable-in-a-heredoc-that-is-in-quotes
  cat <<EOF >> "$(pwd)/dev/$USER_INPUT_CLI_TOOL.ts"
export const completion: Fig.Spec = {
  name: "$SPEC_NAME",
  description: "",
  subcommands: [],
  options: [],
  // Only uncomment if $SPEC_NAME takes an argument
  // args: {}
};
EOF

  echo
  echo "$(tput setaf 2)Successfully created the new Spec $USER_INPUT_CLI_TOOL!$(tput sgr0)" 
  echo 
  echo "Start editing it at $(tput bold)dev/$USER_INPUT_CLI_TOOL.ts$(tput sgr0)... We're opening it for you now!"
  echo
  open "$(pwd)/dev/$USER_INPUT_CLI_TOOL.ts"
  exit
fi
