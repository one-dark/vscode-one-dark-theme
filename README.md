# VS Code One Dark Theme

[![TravisCI build status](https://travis-ci.com/one-dark/vscode-one-dark-theme.svg?branch=master)](https://travis-ci.com/one-dark/vscode-one-dark-theme)
[![Visual Studio Marketplace version](https://img.shields.io/vscode-marketplace/v/mskelton.one-dark-theme.svg)](https://marketplace.visualstudio.com/items?itemName=mskelton.one-dark-theme)
[![Visual Studio Marketplace downloads](https://img.shields.io/vscode-marketplace/d/mskelton.one-dark-theme.svg)](https://marketplace.visualstudio.com/items?itemName=mskelton.one-dark-theme)

> [One Dark](https://github.com/atom/one-dark-syntax) theme for VS Code.

## Major changes from old theme

This theme had gotten bloated with years of changes making the scope lists a tangled web of conflicting styles. With this release we have re-created the theme from scratch using low level scopes to apply to as many languages as possible. Because of this, the theme has changed significantly, may vary greatly from previous versions, and may not work in certain languages.

Additionally, we have moved away from the approach of generating multiple theme (i.e. One Dark Italic Vivid, One Dark Italic Bold) in favor of a single theme "One Dark" which can be customized using settings. Search for "One Dark" in the VS Code settings editor to view the available settings for this theme. Not only is this a better user experience, but it also allows for more customization (i.e. vivid and bold without italics).

Finally, this release changes the theme name from "One Dark Pro Italic" to "One Dark Theme" as the theme can now be configured to use or not use italics using the new theme settings.

We hope you enjoy this new version and we appreciate your patience with any issues that come up as a result of this major overhaul. If you find any issues with this update, please open an issue on our [GitHub repo](https://github.com/one-dark/vscode-one-dark-theme). Thank you all!

## Theme configuration

This theme comes with several configuration settings to allow you to customize the theme to your preference. We currently support the following settings:

- **Vivid** - Uses the [One Dark Vivid](https://atom.io/themes/one-dark-vivid-syntax) color palette instead of the default color palette.
- **Italic** - When enabled, uses italic font for keywords. Note that some scopes (i.e. markdown block quotes) are styled with italic font even when this setting is disabled.
- **Bold** - When enabled, uses bold font for namespace, class, and function names. Note that some scopes (i.e. markdown headers) are styled with bold font even when this setting is disabled.

## Advanced customizations

For more advanced theme customizations, use the setting `workbench.colorCustomizations` to customize the currently selected theme. For example, you can add this snippet in your `settings.json` file:

```json
"workbench.colorCustomizations": {
    "tab.activeBackground": "#282c34",
    "activityBar.background": "#282c34",
    "sideBar.background": "#282c34"
}
```

or use the setting `editor.tokenColorCustomizations`

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

Please refer to the official [Theme Color Reference][theme-color-reference] or [Color Theme Documentation][color-theme-docs], for more information on customizing the theme.

## Contributors

Thanks to [阿发](https://github.com/Binaryify) and the [OneDark-Pro](https://github.com//OneDark-Pro) repository which this theme is based on!

[theme-color-reference]: https://code.visualstudio.com/docs/getstarted/theme-color-reference
[color-theme-docs]: https://code.visualstudio.com/docs/getstarted/themes
