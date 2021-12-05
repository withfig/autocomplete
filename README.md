<p align="center">
    <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBanner.png?raw=true"/>
</p>

---

![os](https://img.shields.io/badge/os-%20macOS-light)
[![Signup](https://img.shields.io/badge/signup-public%20beta-blueviolet)](https://fig.io?ref=github_autocomplete)
[![Documentation](https://img.shields.io/badge/documentation-black)](https://fig.io/docs/)
[![All-Contributors](https://img.shields.io/github/contributors/withfig/autocomplete)](#Contributors)
![Discord](https://img.shields.io/discord/837809111248535583?color=768ad4&label=discord)
[![Twitter](https://img.shields.io/twitter/follow/fig.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=fig)

**[Fig](https://fig.io?ref=github_autocomplete) adds autocomplete to your terminal.** 

As you type, Fig pops up subcommands, options, and contextually relevant arguments in your existing terminal on macOS.


![Fig Visual Autocomplete For Your Terminal Demo](https://fig.io/gifs/demo-with-header.gif)

<br/>

## ⚡️ Installation
##### With [Homebrew](https://brew.sh): 
```
brew install fig
```
##### Manually: 
Download the macOS app at [fig.io/download](https://fig.io/download).

## 👋 Add a completion spec for a CLI tool

Want to add autocomplete to a CLI tool (or make changes to an existing autocomplete spec)? We welcome contributions!

Completion specs are defined in a _declarative_ schema that specifies `subcommands`, `options` and `arguments`. Suggestions are generated from information in the spec or can be generated dynamically by running shell commands or reading local files.

**For documentation and tutorials**, visit
[fig.io/docs](https://fig.io/docs).

**To request autocomplete for a CLI tool**, open an [issue](https://github.com/withfig/autocomplete/issues/new/choose).

<br/>

## 😎 Get Started

Build your first spec in 3 min or less: [fig.io/docs/getting-started](https://fig.io/docs/getting-started)

**Prerequisites:**

- Early access to the Fig macOS app.
  > If you don't have access yet, sign up for the [waitlist](https://fig.io) and say you're interested in building completions!
- Node and NPM (or Yarn).

<br/>

**Setup:**

1. Click [here](https://GitHub.com/withfig/autocomplete/fork/) to fork this repo.

2. Clone your forked repo and create an example spec

```bash
# Replace `YOUR_GITHUB_USERNAME` with your own github username
git clone https://github.com/YOUR_GITHUB_USERNAME/autocomplete.git fig-autocomplete
cd fig-autocomplete

# Add withfig/autocomplete as a remote
git remote add upstream https://github.com/withfig/autocomplete.git

# Install packages
npm install

# Create an example spec (call it "abc")
npm run create-spec abc

# Turn on "dev mode"
npm run dev
```

3. Now go to your terminal and type `abc[space]`. Your example spec will appear. 😊

#### Other things to know

- Edit your spec in typescript in the `src/` folder
- On save, specs are compiled to the `build/` folder
- In **dev mode** specs are read from the `build` folders. Otherwise they are read from `~/.fig/autocomplete`

<br/>

## 📦 Other available package.json commands

```bash

# Typecheck all specs in the src/ folder
npm test

# Compile typescripts specs from src/ folder to build/ folder
npm run build

# Copy all specs from the build/ folder to the ~/.fig/autocomplete folder
npm run copy:all

# Copy an individual spec from the build/ folder to the ~/.fig/autocomplete folder
npm run copy <spec-name>
```

**We would love contributions for**
* any other completion spec for CLI tools you use regularly
* generators for existing specs

Never submitted a PR before? Check out our [How to Contribute](https://fig.io/docs/getting-started/contributing) guide. Many of Fig's 100+ contributors made their first open source contribution to Fig too!

## 😊 Need Help?

<p align="center">
    Join our community
<br/>
<a href="https://fig.io/community">
    <img src="http://fig.io/icons/discord-logo-square.png" width="80px" height="80px" /> 
</a>
</p>

## 🙋‍♀️ FAQ

#### What terminals does Fig work with?

Fig works with iTerm, the native MacOS Terminal app, Hyper and the integrated terminal in VSCode.

#### How does Fig work?

Fig uses the Accessibility API on Mac to position the window, insert text on your behalf, and read what you've typed in your terminal.

#### Does Fig work on Windows or Linux?

Currently, Fig is only available on MacOS.

#### How can I get access?

Fig is currently in a _public_ beta. You can install Fig by running `brew install fig` or by downloading the app at [fig.io/download](https://fig.io/download).

#### Can I use Fig to build autocomplete for my team's internal scripts and CLI tools?

Yes! Check out our guide on how to [get started building autocomplete specs](https://fig.io/docs/getting-started).

#### Did we miss something?

Get in touch at hello@fig.io or chat with us in [Discord](https://fig.io/community).

<br/>

## ✨ Contributors

<a href="https://github.com/withfig/autocomplete/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=withfig/autocomplete" />
</a>
<!--  https://contrib.rocks -->
