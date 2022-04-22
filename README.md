<p align="center">
  <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBanner.png?raw=true#gh-light-mode-only"/>
  <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBannerInverted.png?raw=true#gh-dark-mode-only"/>
</p>

---

[![Badge: macOS](https://img.shields.io/badge/os-%20macOS-light)](#)
[![Badge: Sign up (public beta)](https://img.shields.io/badge/signup-public%20beta-blueviolet)](https://fig.io?ref=github_autocomplete)
[![Badge: Documentation](https://img.shields.io/badge/documentation-black)](https://fig.io/docs/)
[![Badge: contributors](https://img.shields.io/github/contributors/withfig/autocomplete)](#Contributors)
[![Badge: Join the Discord server](https://img.shields.io/discord/837809111248535583?color=768ad4&label=discord)](https://fig.io/community)
[![Badge: Follow on Twitter](https://img.shields.io/twitter/follow/fig.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=fig)

**[Fig](https://fig.io?ref=github_autocomplete) adds autocomplete to your terminal.**

As you type, Fig pops up subcommands, options, and contextually relevant arguments in your existing terminal on macOS.

## ⚡️ Installation

* **macOS**:
  * **Homebrew**: `brew install --cask fig`
  * **DMG**: Download from our website: [fig.io](https://fig.io/download)
* **Windows/Linux**:
  * Join the [waitlist](https://withfig.typeform.com/linux)
<br/>

![Demo of Fig's visual autocomplete in a terminal](https://fig.io/gifs/demo-with-header.gif)

<br/>

## 👋 What are "completion specs"?

A completion spec is a _declarative_ schema that specifies the `subcommands`, `options` and `args` for a CLI tool. Fig uses these schemas to generate suggestions.

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

## 🏠 Make completions for local scripts

You can use Fig's autocomplete for your own tools too. Here's how to create private completions:

```bash
# Make sure you're in your home directory
cd ~

# Create your .fig/autocomplete folder
npx @withfig/autocomplete-tools init
cd ~/.fig/autocomplete

# Create your completions!
npm run create-spec xyz
npm run dev
```

Read more: [fig.io/docs/guides/private-autocomplete](https://fig.io/docs/guides/private-autocomplete)

#### Other things to know

- Edit your spec in TypeScript in the `src/` folder
- On save, specs are compiled to the `build/` folder
- In **dev mode**, specs are read from the `build` folder, and generators run every keystroke.

<br/>

## 📦 Other available package.json commands

```bash
# Typecheck all specs in the src/ folder
npm test

# Compile typescripts specs from src/ folder to build/ folder
npm run build

# Lint and fix issues
npm run lint:fix
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

## 🙋‍♀️ FAQ

#### What terminals does Fig work with?

Fig works with the native macOS Terminal app, [iTerm], [Tabby], [Hyper], [Kitty], [WezTerm], and [Alacritty]. It also works in the integrated terminals of [VSCode], [JetBrains IDEs], [Android Studio], and [Nova].

[iTerm]: https://iterm2.com
[Tabby]: https://tabby.sh
[Hyper]: https://hyper.is
[Kitty]: https://sw.kovidgoyal.net/kitty
[WezTerm]: https://wezfurlong.org/wezterm/
[Alacritty]: https://alacritty.org/
[VSCode]: https://code.visualstudio.com/
[JetBrains IDEs]: https://www.jetbrains.com/
[Android Studio]: https://developer.android.com/studio
[Nova]: https://nova.app/

Want to see another terminal included? Check our [issue tracker](https://github.com/withfig/fig) and add your support!

#### How does Fig work?

Fig uses the Accessibility API on Mac to position the window, and integrates with your shell to read what you've typed.

#### Does Fig work on Windows or Linux?

Not yet, Fig is only available on MacOS for now. [Windows](https://github.com/withfig/fig/issues/35) and [Linux](https://github.com/withfig/fig/issues/34) is in progress!

#### How can I download Fig?

Run `brew install fig` or, downloading the app at [fig.io/download](https://fig.io/download). Then, launch the Fig app!

#### Can I use Fig to build autocomplete for my team's internal scripts and CLI tools?

Yes! Check out our guide on how to [get started building autocomplete specs](https://fig.io/docs/getting-started).

#### How do I submit a PR?

Check out our [How to Contribute](https://fig.io/docs/getting-started/contributing) guide. Many of Fig's 150+ contributors made their first open source contribution to Fig!

#### Fig doesn't work for me!

[Join the Discord server](https://fig.io/community) and we'll debug it. Fixing Fig in your setup will also fix it for other people too! 🙂

#### Did we miss something?

Get in touch at hello@fig.io or chat with us on [Discord](https://fig.io/community).

<br/>

## ✨ Contributors

<a href="https://github.com/withfig/autocomplete/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=withfig/autocomplete" />
</a>
<!--  https://contrib.rocks -->
