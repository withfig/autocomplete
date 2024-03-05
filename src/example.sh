# A collection of macOS shell one-liners that can be run interactively, they all must only be one line and line up with the comment above them

# list all version of node on my path
which -a node | xargs -I{} bash -c 'echo -n "{}: "; {} --version'

# Generate all combination (e.g. A,T,C,G)
set={A,T,C,G}; group=5; for ((i=0; i<$group; i++)); do; repetition=$set$repetition; done; bash -c "echo "$repetition""

# Find average of input list/file of integers
i=`wc -l $FILENAME|cut -d ' ' -f1`; cat $FILENAME| echo "scale=2;(`paste -sd+`)/"$i|bc#

# Find all files recursively with "conf" in their name and output any lines found containing a specific string of text
find . -name '*conf*' -exec grep -Hni "$MATCH" {} \; 

# Add an alias for git commit to my zshrc
echo "alias gcm='git commit -m '" >> ~/.zshrc











