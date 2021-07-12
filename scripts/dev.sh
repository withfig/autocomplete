#!/bin/bash

clear

# Checks if user is on macOS
if [[ "$OSTYPE" == "darwin"* ]] 1> /dev/null 2> /dev/null; then

    # Checks if CLI is installed
    if ! command -v fig 1> /dev/null 2> /dev/null; then

        # Check if Fig app is installed
        if !([[ -d /Applications/Fig.app ]] || [[ -d ~/Applications/Fig.app ]]) 1> /dev/null 2> /dev/null; then
            echo
            echo
            echo "$(tput setaf 7)******";
            echo "******";
            echo "$(tput setaf 3)$(tput bold) WARNING: Fig App is not installed";
            echo "$(tput setaf 7)******";
            echo "******";
        
        # Lets user know that the CLI isn't installed
        else 
            echo
            echo
            echo "$(tput setaf 7)******";
            echo "******";
            echo "$(tput setaf 3)$(tput bold) WARNING: Fig CLI is not installed";
            echo "$(tput setaf 7)******";
            echo "******";
        fi
    fi
else
    echo
    echo "$(tput setaf 1)******";
    echo "******";
    echo "$(tput setaf 1)$(tput bold) WARNING: Looks like you're not on macOS. We're working on linux / windows builds!";
    echo "$(tput setaf 3)$(tput bold) You can still build and contribute to completion specs, but you will not be able to test them unless you are on a mac or a macosVM";
    echo "$(tput setaf 1)******"
    echo "******";
fi

echo 
echo "Welcome to $(tput bold)$(tput setaf 5)Fig Dev Mode$(tput sgr0)";
echo 
echo "1. Edit your spec(s) in the $(tput bold)dev/$(tput sgr0) directory";
echo "2. On save, they will compile to the local $(tput bold)specs/$(tput sgr0) directory";
echo "3. Test your changes $(tput bold)instantly$(tput sgr0) in your terminal";
echo "4. When done, hit $(tput bold)ctrl + c$(tput sgr0) to exit";
echo;

DISABLE_DEV_MODE() {

    echo 
    echo 
    echo 'Fig dev mode disabled';
    echo

    fig settings autocomplete.developerModeNPM false;
    fig settings autocomplete.developerModeNPMInvalidateCache false;

    trap - SIGINT SIGTERM SIGQUIT;
    exit 0
}

trap DISABLE_DEV_MODE SIGINT SIGTERM SIGQUIT;

fig settings autocomplete.developerModeNPM true && fig settings autocomplete.devCompletionsFolder "$(pwd)"/specs && ts-node-script scripts/compiler.ts 'INVALIDATE_CACHE' --watch