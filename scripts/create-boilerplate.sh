#!/bin/bash

echo "$(tput setaf 4)What's the name of the CLI you want to create the Spec for?$(tput sgr0)"
read CLI_THE_USER_INPUT

# Check if the given file exists
# Must put file path in quotes in case either variable has spaces
if [[ -f "$INIT_CWD/dev/$CLI_THE_USER_INPUT.ts" ]]; then
  echo
  echo "$(tput setaf 1)This completion spec already exists$(tput sgr0)"
  echo
  echo Start editing it from the $(tput bold)dev/$CLI_THE_USER_INPUT.ts$(tput sgr0) now!
  echo 
  exit 1
else 

  ## This is known as a here document (or heredoc)
  ## Using a hyphen between << and EOF will remove any indenting beforehand e.g. <<-EOF
    # https://stackoverflow.com/questions/4937792/using-variables-inside-a-bash-heredoc
  ## Using quotes around EOF will remove expansions
    # https://superuser.com/questions/1436906/need-to-expand-a-variable-in-a-heredoc-that-is-in-quotes
  cat <<EOF >> "$INIT_CWD/dev/$CLI_THE_USER_INPUT.ts"


// To learn more about the spec standard visit https://withfig.com/docs/autocomplete/building-a-spec#building-your-first-autocomplete-spec
// The below is a dummy example for git. Make sure to change the file name!
export const completion: Fig.Spec = {
  name: "git",
  description: "The stupid content tracker",
  subcommands: [
    {
      name: "checkout",
      description: "Switch branches or restore working tree files",
      
      // If a subcommand or option takes an argument, you must include the arg prop, even if it's an empty object like below
      // If you want to build custom suggestions for arguments check out: https://withfig.com/docs/autocomplete/building-a-spec#making-advanced-suggestions
      args: { },
      options: [
        { 
          name: ["-b"], 
          description: "create and checkout a new branch", 
          args: { 
            name: "branch"
          } 
        },
      ]
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current git version"
    }
  ]
}

EOF

  echo
  echo "$(tput setaf 2)Successfully created the new Spec $CLI_THE_USER_INPUT! Start editing it in the dev/ folder...$(tput sgr0)"
  echo
  echo Opening it for you now...
  open "$INIT_CWD/dev/$CLI_THE_USER_INPUT.ts"
fi
