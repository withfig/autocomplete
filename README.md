[![Badge: macOS](https://img.shields.io/badge/os-%20macOS-light)](#)
[![Badge: Documentation](https://img.shields.io/badge/documentation-black)](https://fig.io/docs/)
[![Badge: contributors](https://img.shields.io/github/contributors/withfig/autocomplete)](#Contributors)

**[Amazon Q Developer in the command line](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-getting-started-installing.html)
adds IDE-style completions for hundreds of popular CLIs like `git`, `npm`,
`docker`, and `aws`. Start typing, and Amazon Q populates contextually relevant
subcommands, options and arguments.**

## ⚡️ Installation

- **macOS**:
  - **DMG**: Download from AWS:
    [aws.amazon.com](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-getting-started-installing.html)
  - **Homebrew**: `brew install amazon-q`
- **Linux/Windows**:
  - Follow the discussions for
    [Linux](https://github.com/aws/q-command-line-discussions/discussions/14) or
    [Windows](https://github.com/aws/q-command-line-discussions/discussions/15)
- **Remote machines**
  - [Autocomplete in SSH](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-autocomplete-ssh.html)

> NOTE: Once it's downloaded, launch the app to set up Amazon Q for command
> line!

<br/>

![Demo of Amazon Q's CLI Completions in a terminal](https://docs.aws.amazon.com/images/amazonq/latest/qdeveloper-ug/images/command-line-completions.gif)

<br/>

## 👋 What are "completion specs"?

A completion spec is a _declarative_ schema that specifies the `subcommands`,
`options` and `args` for a CLI tool. Amazon Q uses these schemas to generate
suggestions.

<br/>

## 😎 Contribute your first spec in < 3 minutes

Use the steps below or follow our getting started guide:
[fig.io/docs](https://fig.io/docs)

**Prerequisites:**

- Download Amazon Q for command line
- Node and Pnpm

<br/>

**Steps**

1. Make sure you have `pnpm` [installed](https://pnpm.io/installation), as
   that's the package manager used in this repo.

2. Click [here](https://GitHub.com/withfig/autocomplete/fork/) to fork this
   repo.

3. Clone your forked repo and create an example spec

   ```bash
   # Replace `YOUR_GITHUB_USERNAME` with your own GitHub username
   git clone https://github.com/YOUR_GITHUB_USERNAME/autocomplete.git autocomplete
   cd autocomplete

   # Add withfig/autocomplete as a remote
   git remote add upstream https://github.com/withfig/autocomplete.git

   # Install packages
   pnpm install

   # Create an example spec (call it "abc")
   pnpm create-spec abc

   # Turn on "dev mode"
   pnpm dev
   ```

4. Now go to your terminal and type `abc[space]`. Your example spec will appear.
   😊

#### Other things to know

- Edit your spec in TypeScript in the `src/` folder
- On save, specs are compiled to the `build/` folder
- In **dev mode**, specs are read from the `build` folder, and generators run
  every keystroke.

<br>

## 📦 Other available package.json commands

```bash
# Typecheck all specs in the src/ folder
pnpm test

# Compile typescripts specs from src/ folder to build/ folder
pnpm build

# Lint and fix issues
pnpm lint:fix
```

## 🔥 Contributions

We would love contributions for:

- New completion specs
- Errors with existing completion specs (e.g. missing subcommands, options, or
  arguments)
- [Generators](https://fig.io/docs/getting-started/generating-argument-suggestions)
  for argument suggestions
- Better descriptions, icons etc
- [Themes](https://github.com/withfig/themes)!

If you aren't able to contribute, please feel free to open an
[issue](https://github.com/withfig/autocomplete/issues/new/choose).

## 🙋‍♀️ FAQ

#### What terminals does Amazon Q work with?

Amazon Q for command line works with the native macOS Terminal app, [iTerm],
[Tabby], [Hyper], [Kitty], [WezTerm], and [Alacritty]. It also works in the
integrated terminals of [VSCode], [JetBrains IDEs], [Android Studio], and
[Nova].

[iterm]: https://iterm2.com
[tabby]: https://tabby.sh
[hyper]: https://hyper.is
[kitty]: https://sw.kovidgoyal.net/kitty
[wezterm]: https://wezfurlong.org/wezterm/
[alacritty]: https://alacritty.org/
[vscode]: https://code.visualstudio.com/
[jetbrains ides]: https://www.jetbrains.com/
[android studio]: https://developer.android.com/studio
[nova]: https://nova.app/

Want to see another terminal included? Check our
[issue tracker](https://github.com/aws/q-command-line-discussions) and add your
support for it!

#### How does Amazon Q for command line work?

Amazon Q for command line uses the Accessibility API on Mac to position the
window, and integrates with your shell to read what you've typed.

#### Does Amazon Q for command line work on Windows or Linux?

Not yet, Amazon Q for command line is only available on macOS for now.
[Windows](https://github.com/aws/q-command-line-discussions/discussions/15) and
[Linux](https://github.com/aws/q-command-line-discussions/discussions/14)
support is in progress!

#### How can I download Amazon Q?

Run `brew install amazon-q` or, downloading the app at
[aws.amazon.com](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-getting-started-installing.html).
Then, launch the Amazon Q app!

#### How do I submit a PR?

Check out our
[How to Contribute](https://fig.io/docs/getting-started/contributing) guide.
Many of Amazon Q's 400+ contributors made their first open source contribution
to Amazon Q!

#### Amazon Q for command line doesn't work for me!

Run `q doctor` to automatically debug issues with your installation. Otherwise
make an issue in our GitHub discussions community:
[aws/q-command-line-discussions](https://github.com/aws/q-command-line-discussions/discussions)

<br/>

## ✨ Contributors

<a href="https://github.com/withfig/autocomplete/graphs/contributors">
  <img alt="Grid of profile icons of the 400+ contributors" src="https://contrib.rocks/image?repo=withfig/autocomplete" />
</a>
