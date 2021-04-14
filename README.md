<p align="center">
    <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBanner.png?raw=true"/>
</p>

---

![os](https://img.shields.io/badge/os-%20macOS-light)
[![Signup](https://img.shields.io/badge/signup-private%20beta-blueviolet)](https://withfig.com?ref=github_autocomplete)
[![Documentation](https://img.shields.io/badge/documentation-black)](https://withfig.com/docs/autocomplete/getting-started)
[![Slack](https://img.shields.io/badge/slack-purple)](https://withfig.com/community)
[![Twitter](https://img.shields.io/twitter/follow/withfig.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=withfig)

**[Fig](https://withfig.com?ref=github_autocomplete) adds autocomplete to the terminal.** As you type, Fig pops up subcommands, options, and contextually relevant arguments in your existing terminal on macOS.


![Fig Visual Autocomplete For Your Terminal Demo](https://withfig.com/gifs/demo-with-header.gif)


## Add a completion spec for a CLI tool 
Looking to improve autocomplete functionality or add support for your favorite CLI tool? We welcome contributions for new specs!

Completion specs are defined in a *declarative* schema that specifies `subcommands`, `options` and `arguments`. Suggestions can be generated dynamically by running shell commands or reading local files, in addition to the information in the spec itself.

**For more documentation and tutorials**, visit [withfig.com/docs](https://withfig.com/docs/autocomplete/getting-started)

**To request completions for a CLI tool**, open an [issue](https://github.com/withfig/autocomplete/issues/new/choose).


## Get Started

```bash
git clone https://github.com/withfig/autocomplete.git fig-autocomplete
cd fig-autocomplete

# Install packages
npm install

# Go into testing mode
npm run dev
```

Edit your spec in the `dev/` folder. It will compile to the `specs/` folder on save. Start testing your spec immediately in your terminal.

**Note**: Fig usually looks for completion specs in your `~/.fig/autocomplete` folder. When in testing mode, we check your cloned repo's `specs/` folder

<br/>


## Other available commands
```bash

# Create a new spec from a boilerplate template
npm run create-boilerplate

# Typecheck all specs in the dev/ folder
npm test

# Compile typescripts specs from dev/ folder to specs/ folder
npm run build

# Copy all specs from the specs/ folder to the ~/.fig/autocomplete folder
npm run copy:all

# Copy an individual spec from the specs/ folder to the ~/.fig/autocomplete folder
npm run copy <spec-name>
```


## FAQ

#### What terminals does Fig work with?
Fig works with iTerm, the native MacOS Terminal app, Hyper and the integrated terminal in VSCode.

#### How does Fig work?
Fig uses the Accessibility API on Mac to insert text on your behalf and read the current keybuffer.

#### Does Fig work on Windows or Linux?
Currently, Fig is only available on MacOS.

#### How can I get access?
Sign up for the waitlist at [withfig.com](https://withfig.com?ref=github-autocomplete). Fig is currently in a private beta. We are onboarding batches of new users each week.  
 
#### Can I use Fig to build autocomplete for my team's internal scripts and CLI tools?
Yes! Check out our guide on how to [get started building autocomplete specs](https://withfig.com/docs/autocomplete/getting-started). 

#### Did we miss something?
Get in touch at hello@withfig.com or chat with us on [Slack](https://withfig.com/community)
