<p align="center">
  <img width="300" alt="Fig logo" src="https://raw.githubusercontent.com/withfig/fig/main/static/FigBanner.png#gh-light-mode-only"/>
  <img width="300" alt="Fig logo" src="https://raw.githubusercontent.com/withfig/fig/main/static/FigBannerInverted.png#gh-dark-mode-only"/>
</p>

---

[![Badge: macOS](https://img.shields.io/badge/os-%20macOS-light)](#)
[![Badge: Sign up (public beta)](https://img.shields.io/badge/signup-public%20beta-blueviolet)](https://fig.io?ref=github_autocomplete)
[![Badge: Documentation](https://img.shields.io/badge/documentation-black)](https://fig.io/docs/)
[![Badge: contributors](https://img.shields.io/github/contributors/withfig/autocomplete)](#Contributors)
[![Badge: Join the Discord server](https://img.shields.io/discord/837809111248535583?color=5865F2&label=discord)](https://fig.io/community)
[![Badge: Follow on Twitter](https://img.shields.io/twitter/follow/fig.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=fig)

**[Fig](https://fig.io?ref=github_autocomplete) 使个人使用命令行更容易，团队协作性更强。**

我们最受欢迎的产品是Autocomplete。当你输入时，Fig会在您现有的终端中弹出子命令、选项和上下文相关的参数。

## ⚡️ 安装

- **macOS**:
  - **DMG**: 从我们的网站下载： [fig.io](https://fig.io/welcome)
  - **Homebrew**: `brew install fig`
- **Windows/Linux**:
  - 加入 [候补名单](https://withfig.typeform.com/linux)
- **Remote machines**
  - [Autocomplete in SSH](https://fig.io/user-manual/autocomplete/ssh)
  - [Autocomplete in Docker Containers](https://fig.io/user-manual/autocomplete/docker)

> 注意：下载完成后，请启动应用程序设置Fig！

<br/>

![在终端中展示Fig的可视化自动完成演示](https://fig.io/gifs/demo-with-header.gif)

<br/>

## 👋 什么是 "completion specs"?

Completion specs 是一种声明性的模式，用于指定 CLI 工具的 `子命令`、`选项`和 `参数`。Fig 使用这些模式生成建议。

<br/>

## 😎 在不到3分钟内贡献你的第一个规范

请按照以下步骤或者参考我们的入门指南： [fig.io/docs](https://fig.io/docs)

**先决条件:**

- 下载适用于 macOS 的 Fig
- Node 和 Yarn

<br/>

**Steps**

1. 请确保您已经[安装了](https://classic.yarnpkg.com/lang/en/docs/install) `yarn`，因为这个仓库使用的是该软件包管理器。

2. 点击[这里](https://GitHub.com/withfig/autocomplete/fork/)来fork此仓库。

3. 克隆你分叉的存储库并创建一个示例规范

   ```bash
   # 将 `YOUR_GITHUB_USERNAME` 替换为你自己的 github 用户名
   git clone https://github.com/YOUR_GITHUB_USERNAME/autocomplete.git fig-autocomplete
   cd fig-autocomplete

   # 将 withfig/autocomplete 添加为远程仓库
   git remote add upstream https://github.com/withfig/autocomplete.git

   # 安装软件包
   yarn install

   # 创建一个规范示例（称之为 "abc"）
   yarn create-spec abc

   # 打开 "dev mode"
   yarn dev
   ```

4. 现在打开终端，输入 `abc[空格]` 。你的示例规范将会显示出来。 😊

#### 其他需要了解的事情

- 在 `src/` 文件夹中用TypeScript编辑你的规范。
- 保存时，规范将被编译到 `build/` 文件夹中。
- 在 **dev mode** 下，规范从 `build` 文件夹中读取，并且生成器在每次按键时运行。

<br>

## 🪄 将 AI 添加到完成功能中

你也可以使用Fig的自动完成功能来创建自己的工具。以下是如何创建私有补全项：
```ts
import { ai } from "@fig/autocomplete-generators"

...

generators: [
  ai({
    // 提示
    prompt: "Generate a git commit message",
    
    // 发送任何相关的本地背景信息。
    message: async ({ executeShellCommand }) => {
      return executeShellCommand("git diff")
    },
    
    // 将每个换行符转换为建议（如果需要更灵活性，可以指定一个`postProcess1`函数来代替）。
    splitOn: "\n",
  })
]
 
```


<br/>

## 📦 其他可用的 package.json 命令

```bash
# 对 src 文件夹中的所有规格进行键入检查
yarn test

# 将 src 文件夹中的 TypeScript 规范编译到 build 文件夹中
yarn build

# 修复和解决问题
yarn lint:fix
```

## 🔥 贡献

我们非常欢迎以下方面的贡献：

- new completion specs
- 现有的完成规范存在错误（例如缺少子命令、选项或参数）。
- [生成器](https://fig.io/docs/getting-started/generating-argument-suggestions) 用于参数建议
- 更好的描述，图标等
- [主题](https://github.com/withfig/themes)!

如果你无法做出贡献，请随时打开一个[问题](https://github.com/withfig/autocomplete/issues/new/choose)。

## 😊 需要帮助吗？

<p align="center">
  加入我们的社区
  <br/>
  <a href="https://fig.io/community">
    <img alt="Discord logo" src="http://fig.io/icons/discord-logo-square.png" width="80px" height="80px" />
  </a>
</p>

## 🧑‍💻 团队/企业

想要使用 Fig 来添加自动完成内部 CLI 工具吗？或者在工作中使用 Fig，但担心安全合规性问题吗？

我们很乐意帮助你进行设置。请发送电子邮件至[enterprise@fig.io](mailto:enterprise@fig.io)。

## 🙋‍♀️ FAQ

#### Fig适用于哪些终端？

Fig适用于原生的macOS终端应用程序，[iTerm]，[Tabby]，[Hyper]，[Kitty]，[WezTerm]和[Alacritty]。它还适用于[VSCode]、 [JetBrains IDEs], [Android Studio], 和[Nova]的集成终端。

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

想看到其他终端加入吗？请查看我们的 [issue tracker](https://github.com/withfig/fig) 并添加您的支持！

#### Fig 如何工作？

Fig在Mac上使用辅助功能API来定位窗口，并与你的shell集成，以读取您输入的内容。

#### Fig 在 Windows 或 Linux 上工作吗？

目前为止，Fig仅在macOS上可用。[Windows](https://github.com/withfig/fig/issues/35)和[Linux](https://github.com/withfig/fig/issues/34)的支持正在进行中！

#### 如何下载 Fig ？

运行 `brew install fig` 或者，在 [fig.io/download](https://fig.io/download) 下载应用程序。然后，启动 Fig 应用！

#### 我可以使用 Fig 为我的团队的内部脚本和 CLI 工具构建自动完成吗？

是的！请查看我们关于如何[开始构建自动完成规范](https://fig.io/docs/getting-started)的指南。

#### How do I submit a PR?

查看我们的[如何贡献](https://fig.io/docs/getting-started/contributing)指南。Fig 的200多位贡献者中，许多人都是通过对 Fig 进行首次开源贡献而加入的！

#### Fig 对我不起作用！

[加入 Discord 服务器](https://fig.io/community)，我们会进行调试。修复你的 Fig 设置将同时为其他人解决问题！🙂

#### 我们有什么遗漏吗？

通过电子邮件 hello@fig.io 与我们联系，或在[Discord](https://fig.io/community)上与我们聊天。

<br/>

## ✨ 贡献者

<a href="https://github.com/withfig/autocomplete/graphs/contributors">
  <img alt="Grid of profile icons of the 200+ contributors" src="https://contrib.rocks/image?repo=withfig/autocomplete" />
</a>
<!--  https://contrib.rocks -->
