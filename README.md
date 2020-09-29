# Completion Specs for Autocomplete in your Terminal

1. 

```bash
# Make the autocomplete folder where Fig looks for completion specs. Cd into it
mkdir -p ~/.fig/autocomplete; cd $_

# Download all the files in the specs folder of this repo
curl https://codeload.github.com/withfig/completion-specs/tar.gz/master | \
tar -xz --strip=2 completion-specs-master/specs
```
