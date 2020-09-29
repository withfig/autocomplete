# Visual Autocomplete For your Terminal

1. Make sure you have Fig (version 1.0.20 or above) installed. We are currently in private beta. Sign up to our waitlist here: [https://withfig.com](https://withfig.com)

2. Install the completion specs

```bash
# Make the autocomplete folder where Fig looks for completion specs. Cd into it
mkdir -p ~/.fig/autocomplete; cd $_

# Download all the files in the specs folder of this repo
curl https://codeload.github.com/withfig/completion-specs/tar.gz/master | \
tar -xz --strip=2 completion-specs-master/specs
```

3. If you want to make your own spec, check out our docs: [https://docs.withfig.com/autocomplete](https://docs.withfig.com/autocomplete)  


All completion specs must be added to your `~/.fig/autocomplete` directory to work


Something up? Create a pull request or message us: [hello@withfig.com](mailto:hello@withfig.com)
