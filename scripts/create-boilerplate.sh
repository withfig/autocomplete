#!/bin/bash

echo "$(tput setaf 4)What's the name of the CLI you want to create the Spec for?$(tput sgr0)"
read CLI_THE_USER_INPUT

# Check if the given file exists
# Must put file path in quotes in case either variable has spaces
if [[ -f "$(pwd)/dev/$CLI_THE_USER_INPUT.ts" ]]; then
echo
echo "$(tput setaf 1)This completion spec already exists$(tput sgr0)"
echo 
exit 1

else 
echo "\
export const completion: Fig.Spec = {
  name: \"$CLI_THE_USER_INPUT\",
};" >> $(pwd)/dev/$CLI_THE_USER_INPUT.ts

echo "$(tput setaf 2)Successfully created the new Spec $CLI_THE_USER_INPUT! Start editing it in the dev/ folder...$(tput sgr0)"
fi
