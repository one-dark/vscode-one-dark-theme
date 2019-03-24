# OneDark Pro Italic

[![TravisCI build status](https://travis-ci.com/markypython/OneDark-Pro.svg?branch=master)](https://travis-ci.com/markypython/OneDark-Pro)
[![GitHub issues](https://img.shields.io/github/issues/markypython/OneDark-Pro.svg)](https://github.com/markypython/OneDark-Pro/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/markypython/OneDark-Pro.svg)](https://github.com/markypython/OneDark-Pro/pulls)

[![Visual Studio Marketplace version](https://img.shields.io/vscode-marketplace/v/markskelton.one-dark-pro-italic.svg)](https://marketplace.visualstudio.com/items?itemName=markskelton.one-dark-pro-italic)
[![Visual Studio Marketplace downloads](https://img.shields.io/vscode-marketplace/d/markskelton.one-dark-pro-italic.svg)](https://marketplace.visualstudio.com/items?itemName=markskelton.one-dark-pro-italic)
[![Visual Studio Marketplace rating](https://img.shields.io/vscode-marketplace/r/markskelton.one-dark-pro-italic.svg)](https://marketplace.visualstudio.com/items?itemName=markskelton.one-dark-pro-italic#review-details)

Atom's OneDark Pro theme with italic comments and keywords!

[View on GitHub](https://github.com/markypython/OneDark-Pro)

## Italic Theme (Added 1/28/2018)

This repository has been modified from the [OneDark-Pro](https://github.com/Binaryify/OneDark-Pro) theme in a few ways:

1. The red variables have been replaced by white in many cases to allow for distinguishing between object keys and normal variables.
1. Function arguments use the "whiskey" color rather than red.
1. Keywords are in italics ([Operator Mono Dark Theme](https://github.com/vharadkou/OperatorMonoDarkTheme)).

## CHANGELOG

[CHANGELOG.md](CHANGELOG.md)

## Docs & Contribute

[This document](https://binaryify.github.io/OneDark-Pro) includes instructions on how to install and edit the theme.

To help with documentation, run the following commands in your terminal

```bash
git clone git@github.com:markypython/OneDark-Pro.git
cd OneDark-Pro
npm install
npm run docs
```

## Screenshots

Below are some code examples using this theme. The font I am using is the open source [Fira Code iScript](https://github.com/kencrocken/FiraCodeiScript) font.

![Markdown code example](https://raw.githubusercontent.com/markypython/OneDark-Pro/master/static/markdown.png)
![Python code example](https://raw.githubusercontent.com/markypython/OneDark-Pro/master/static/python.png)
![JavaScript code example](https://raw.githubusercontent.com/markypython/OneDark-Pro/master/static/js.png)
![C++ code example](https://raw.githubusercontent.com/markypython/OneDark-Pro/master/static/cpp.png)
![PHP code example](https://raw.githubusercontent.com/markypython/OneDark-Pro/master/static/php.png)

## Tweaks & theming

If you want to play around with new colors, use the setting `workbench.colorCustomizations` to customize the currently selected theme. For example, you can add this snippet in your `settings.json` file:

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
    "[One Dark Pro (Italic)]": {
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

Please check the official
[Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) or
[Color Theme Documentation](https://code.visualstudio.com/docs/getstarted/themes), for more information.

## Contributors

Thanks to [阿发](https://github.com/Binaryify) and the [OneDark-Pro](https://github.com//OneDark-Pro) repository which this theme is based on!
