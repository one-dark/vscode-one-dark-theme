# VS Code One Dark Theme

[![Extension version](https://img.shields.io/vscode-marketplace/v/mskelton.one-dark-theme.svg)](https://marketplace.visualstudio.com/items?itemName=mskelton.one-dark-theme)
[![Extension installs](https://img.shields.io/vscode-marketplace/i/mskelton.one-dark-theme.svg)](https://marketplace.visualstudio.com/items?itemName=mskelton.one-dark-theme)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)

> [One Dark](https://github.com/atom/one-dark-syntax) theme for VS Code.

![Code example](static/screenshots/code.png)

## Major Changes from One Dark Pro Italic 🚨

This theme is the next generation of the One Dark Pro Italic theme. The old theme had become bloated with years of changes making the scope lists a tangled web of conflicting styles. With this release we have re-created the theme from scratch using low level scopes to apply to as many languages as possible. Because of this, the theme has changed significantly, may vary greatly from previous versions, and may not work in certain languages.

Additionally, we have moved away from the approach of generating multiple theme (i.e. One Dark Italic Vivid, One Dark Italic Bold) in favor of a single theme "One Dark" which can be customized using settings. Search for "One Dark" in the VS Code settings editor to view the available settings for this theme. Not only is this a better user experience, but it also allows for more customization (i.e. vivid and bold without italics).

Finally, this release changes the theme name from "One Dark Pro Italic" to "One Dark Theme" as the theme can now be configured to use or not use italics using the new theme settings.

We hope you enjoy this new version and we appreciate your patience with any issues that come up as a result of this major overhaul. If you find any issues with this update, please open an issue on our [GitHub repo][issues]. Thank you all!

## Basic Configuration 🔧

This theme comes with several configuration settings to allow you to customize the theme to your preference. We currently support the following settings:

- **Vivid** - Uses the [One Dark Vivid](https://atom.io/themes/one-dark-vivid-syntax) color palette instead of the default color palette.
- **Italic** - When enabled, uses italic font for keywords. Note that some scopes \(i.e. markdown block quotes\) are styled with italic font even when this setting is disabled.
- **Bold** - When enabled, uses bold font for namespace, class, and function names. Note that some scopes \(i.e. markdown headers\) are styled with bold font even when this setting is disabled.

To access these configuration settings, open the VS Code settings page and search for "One Dark".

![Theme settings](static/screenshots/settings.png)

This theme ships with the italic setting turned on by default and the other settings turned off by default, but you can adjust the settings to any combination you like. After updating the settings, you will be prompted to reload the window to apply the configuration changes.

![Theme settings reload prompt](static/screenshots/reload-prompt.png)

## Advanced Configuration 🧰

VS Code allows users to fully customize themes to their liking. If you wish to adjust the editor colors, use the `workbench.colorCustomizations` setting in your `settings.json` file. An example of this is shown below.

```json
"workbench.colorCustomizations": {
  "tab.activeBackground": "#282c34",
  "activityBar.background": "#282c34",
  "sideBar.background": "#282c34"
}
```

To customize the syntax highlighting, use the `editor.tokenColorCustomizations` setting. An example of this is shown below.

```json
"editor.tokenColorCustomizations": {
  "[One Dark]": {
    "textMateRules": [
      {
        "scope": ["source.python"],
        "settings": {
          "foreground": "#e06c75"
        }
      }
    ]
  }
}
```

For more information, see the official [theme color reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) or [color theme documentation](https://code.visualstudio.com/docs/getstarted/themes).

## Further Documentation 📖

Check out the [docs][docs] for manual installation instructions, additional screenshots, and contributing guidelines.

- [Installation][installation]
- [Screenshots][screenshots]
- [Contributing][contributing]

## Thanks 🙏

- Thanks to @binaryify for his work on the theme this project was originally based on.
- Thanks to [VS Code Nebula Theme](https://github.com/eating-coleslaw/vscode-nebula-theme) for being a great example of how to build a VS Code theme using configuration settings.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/mskelton"><img src="https://avatars3.githubusercontent.com/u/25914066?v=4" width="100px;" alt="Mark Skelton"/><br /><sub><b>Mark Skelton</b></sub></a><br /><a href="https://github.com/one-dark/vscode-one-dark-theme/commits?author=mskelton" title="Code">💻</a> <a href="#question-mskelton" title="Answering Questions">💬</a> <a href="https://github.com/one-dark/vscode-one-dark-theme/commits?author=mskelton" title="Documentation">📖</a> <a href="#ideas-mskelton" title="Ideas, Planning, & Feedback">🤔</a> <a href="#design-mskelton" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/hhquerybuilder"><img src="https://avatars3.githubusercontent.com/u/40240395?v=4" width="100px;" alt="hhquerybuilder"/><br /><sub><b>hhquerybuilder</b></sub></a><br /><a href="#design-hhquerybuilder" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[docs]: https://one-dark.gitbook.io/vscode
[installation]: https://one-dark.gitbook.io/vscode/installation
[screenshots]: https://one-dark.gitbook.io/vscode/screenshots
[contributing]: https://one-dark.gitbook.io/vscode/contributing
[issues]: https://github.com/one-dark/vscode-one-dark-theme/issues
