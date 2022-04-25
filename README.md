<p align="center">
    <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBanner.png?raw=true#gh-light-mode-only"/>
    <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBannerInverted.png?raw=true#gh-dark-mode-only"/>
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

## ⚡️ Installation

* **macOS**:
    * **Homebrew**: `brew install --cask fig`
    * **DMG**: Download from our website: [fig.io](https://fig.io/download)
* **Windows/Linux**:
    * Join the [waitlist](https://withfig.typeform.com/linux)
<br/>

![Fig Visual Autocomplete For Your Terminal Demo](https://fig.io/gifs/demo-with-header.gif)

<br/>



## 👋 What are "completion specs"?

A completion spec is a _declarative_ schema that specifies the `subcommands`, `options` and `arguments` for a CLI tool. We use these schemas to generate suggestions.


<br/>


## 😎 Contribute your first spec in < 3 minutes

Use the steps below or follow our getting started guide: [fig.io/docs](https://fig.io/docs)

**Prerequisites:**

- Download Fig for macOS
- Node and NPM (or Yarn).

<br/>

**Steps**

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
- In **dev mode** specs are read from the `build` folders.

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

## 🔥 Contributions
We would love contributions for:
* new completion specs
* errors with existing completion specs (e.g. missing subcommands, options, or arguments)
* [generators](https://fig.io/docs/getting-started/generating-argument-suggestions) for argument suggestions
* better descriptions, icons etc
* [themes](https://github.com/withfig/themes)!

If you aren't able to contribute, please feel free to open an [issue](https://github.com/withfig/autocomplete/issues/new/choose).


## 😊 Need Help?

<p align="center">
    Join our community
<br/>
<a href="https://fig.io/community">
    <img src="http://fig.io/icons/discord-logo-square.png" width="80px" height="80px" />
</a>
</p>

## 🧑‍💻 Teams / Enterprise
Want to use Fig to add autocomplete internal CLI tools? Or want to use Fig at work but have security / compliance concerns.

We would love to help get you set up. Please email [enterprise@fig.io](mailto:enterprise@fig.io)

## 🙋‍♀️ FAQ

#### What terminals does Fig work with?

Fig works with the native MacOS Terminal app, [iTerm](https://iterm2.com/), [Tabby](https://tabby.sh), [Hyper](https://hyper.is) and the [integrated terminal in VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal). We are adding support for Alacritty, Kitty, and the integrated terminals in JetBrains very soon.

#### How does Fig work?

Fig uses the Accessibility API on Mac to position the window, insert text on your behalf, and read what you've typed in your terminal.

#### Does Fig work on Windows or Linux?

Currently, Fig is only available on MacOS.

#### How can I download Fig?

Run `brew install fig` or by downloading the app at [fig.io/download](https://fig.io/download).

#### Can I use Fig to build autocomplete for my team's internal scripts and CLI tools?

Yes! Check out our guide on how to [get started building autocomplete specs](https://fig.io/docs/getting-started).

#### How do I submit a PR?
Check out our [How to Contribute](https://fig.io/docs/getting-started/contributing) guide. Many of Fig's 150+ contributors made their first open source contribution to Fig!

#### Did we miss something?

Get in touch at hello@fig.io or chat with us in [Discord](https://fig.io/community).

<br/>

## ✨ Contributors

<a href="https://github.com/withfig/autocomplete/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=withfig/autocomplete" />
</a>
<!--  https://contrib.rocks -->
