# Visual Autocomplete For your Terminal
Fig adds app, shortcuts, and autocomplete to your Terminal. <br />

![Fig Visual Autocomplete For Your Terminal Demo](https://withfig.com/video/demos/autocomplete/fig_autocomplete_gif.gif)

**Note**: We currently only work on iTerm2 on macOS.

### Installation
1. Make sure you have Fig (version 1.0.20 or above) installed. We are currently in private beta. Sign up to our waitlist here: [https://withfig.com](https://withfig.com?ref=github)

2. Install the completion specs

```bash
# Make the autocomplete folder where Fig looks for completion specs. Cd into it
mkdir -p ~/.fig/autocomplete; cd $_

# Download all the files in the specs folder of this repo
curl https://codeload.github.com/withfig/completion-specs/tar.gz/master | \
tar -xz --strip=2 completion-specs-master/specs
```

### Make Your Own Spec
1. Check out our docs: [https://docs.withfig.com/autocomplete](https://docs.withfig.com/autocomplete)  
2. Add your spec to `~/.fig/autocomplete`

### Contribute
Make a pull request or issue :)  

<br />
<p>Email us any time: <a href="mailto:hello@withfig.com">hello@withfig.com</a></p>

