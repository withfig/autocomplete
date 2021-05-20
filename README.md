<p align="center">
    <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBanner.png?raw=true"/>
</p>

---

![os](https://img.shields.io/badge/os-%20macOS-light)
[![Signup](https://img.shields.io/badge/signup-private%20beta-blueviolet)](https://fig.io?ref=github_autocomplete)
[![Documentation](https://img.shields.io/badge/documentation-black)](https://fig.io/docs/autocomplete/getting-started)
[![All-Contributors](https://img.shields.io/github/all-contributors/withfig/autocomplete)](#Contributors)
[![Slack](https://img.shields.io/badge/slack-purple)](https://fig.io/community)
[![Twitter](https://img.shields.io/twitter/follow/fig.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=fig)

**[Fig](https://fig.io?ref=github_autocomplete) adds autocomplete to the terminal.** As you type, Fig pops up subcommands, options, and contextually relevant arguments in your existing terminal on macOS.

![Fig Visual Autocomplete For Your Terminal Demo](https://fig.io/gifs/demo-with-header.gif)

## Add a completion spec for a CLI tool

Looking to improve autocomplete functionality or add support for your favorite CLI tool? We welcome contributions for new specs!

Completion specs are defined in a _declarative_ schema that specifies `subcommands`, `options` and `arguments`. Suggestions can be generated dynamically by running shell commands or reading local files, in addition to the information in the spec itself.

**For more documentation and tutorials**, visit [fig.io/docs](https://fig.io/docs/autocomplete/getting-started)

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

Sign up for the waitlist at [fig.io](https://fig.io?ref=github-autocomplete). Fig is currently in a private beta. We are onboarding batches of new users each week.

#### Can I use Fig to build autocomplete for my team's internal scripts and CLI tools?

Yes! Check out our guide on how to [get started building autocomplete specs](https://fig.io/docs/autocomplete/getting-started).

#### Did we miss something?

Get in touch at hello@fig.io or chat with us on [Slack](https://fig.io/community)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/falky97"><img src="https://avatars.githubusercontent.com/u/4949076?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="http://rolandshen.com/"><img src="https://avatars.githubusercontent.com/u/8952958?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="http://mschrage.com/"><img src="https://avatars.githubusercontent.com/u/3155109?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://cstrnt.dev/"><img src="https://avatars.githubusercontent.com/u/20679094?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/QuiiBz"><img src="https://avatars.githubusercontent.com/u/43268759?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://julius-kiekbusch.de/"><img src="https://avatars.githubusercontent.com/u/15707543?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/FlowyCoder"><img src="https://avatars.githubusercontent.com/u/28676154?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/samwinslow"><img src="https://avatars.githubusercontent.com/u/4645779?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://jamesj.ac/kson"><img src="https://avatars.githubusercontent.com/u/13633271?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/dipakparmar"><img src="https://avatars.githubusercontent.com/u/24366206?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/DannyAziz"><img src="https://avatars.githubusercontent.com/u/3679064?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/jdotjdot"><img src="https://avatars.githubusercontent.com/u/1328961?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/alexnaiman"><img src="https://avatars.githubusercontent.com/u/25799714?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/omichowdhury"><img src="https://avatars.githubusercontent.com/u/969419?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/winnayx"><img src="https://avatars.githubusercontent.com/u/46658657?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/Nullfuse"><img src="https://avatars.githubusercontent.com/u/61602086?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/vicentube"><img src="https://avatars.githubusercontent.com/u/73502080?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/rk-yen"><img src="https://avatars.githubusercontent.com/u/4944665?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/berbaroovez"><img src="https://avatars.githubusercontent.com/u/6900468?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/smeevil"><img src="https://avatars.githubusercontent.com/u/13874?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Chair4ce"><img src="https://avatars.githubusercontent.com/u/33118919?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/LI0131"><img src="https://avatars.githubusercontent.com/u/4829473?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="http://sauntimo.org/"><img src="https://avatars.githubusercontent.com/u/2720466?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/ygaitonde"><img src="https://avatars.githubusercontent.com/u/54426809?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
