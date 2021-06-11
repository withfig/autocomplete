#!/bin/bash

clear
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