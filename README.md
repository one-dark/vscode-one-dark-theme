# OneDark Pro Italic

[![TravisCI build status](https://travis-ci.com/markypython/OneDark-Pro.svg?branch=master)](https://travis-ci.com/markypython/OneDark-Pro)
[![GitHub issues](https://img.shields.io/github/issues/markypython/OneDark-Pro.svg)](https://github.com/markypython/OneDark-Pro/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/markypython/OneDark-Pro.svg)](https://github.com/markypython/OneDark-Pro/pulls)

[![Visual Studio Marketplace version](https://img.shields.io/vscode-marketplace/v/markskelton.one-dark-pro-italic.svg)](https://marketplace.visualstudio.com/items?itemName=markskelton.one-dark-pro-italic)
[![Visual Studio Marketplace downloads](https://img.shields.io/vscode-marketplace/d/markskelton.one-dark-pro-italic.svg)](https://marketplace.visualstudio.com/items?itemName=markskelton.one-dark-pro-italic)
[![Visual Studio Marketplace rating](https://img.shields.io/vscode-marketplace/r/markskelton.one-dark-pro-italic.svg)](https://marketplace.visualstudio.com/items?itemName=markskelton.one-dark-pro-italic#review-details)

Atom's OneDark Pro theme with italic comments and keywords!

[View on GitHub](https://github.com/markypython/OneDark-Pro)

# Italic Theme (Added 1/28/2018)

This repository has been modified from the [OneDark-Pro](https://github.com/Binaryify/OneDark-Pro) theme in a few ways:

1. The red variables have been replaced by white in many cases to allow for distinguishing between object keys and normal variables.
1. Function arguments use the "whiskey" color rather than red.
1. Keywords are in italics ([Operator Mono Dark Theme](https://github.com/vharadkou/OperatorMonoDarkTheme)).

Overrides are managed in [`src/overrides.js`](./src/overrides.js).

# CHANGELOG

[CHANGELOG.md](CHANGELOG.md)

# Docs & Contribute

[This document](https://binaryify.github.io/OneDark-Pro) includes instructions on how to install and edit the theme.

To help with documentation, first fork and clone this repository. `cd` to the
OneDark-Pro folder, `npm install` and then run
`npm run docs` to serve the documentation
locally.

# Screenshots

Below are some code examples using this theme.  The font I am using is the open source [Fira Code iScript](https://github.com/kencrocken/FiraCodeiScript) font.

![Markdown code example](https://github.com/markypython/OneDark-Pro/static/markdown.png)
![Python code example](https://github.com/markypython/OneDark-Pro/static/python.png)
![JavaScript code example](https://github.com/markypython/OneDark-Pro/static/js.png)
![C++ code example](https://github.com/markypython/OneDark-Pro/static/cpp.png)
![PHP code example](https://github.com/markypython/OneDark-Pro/static/php.png)

## Tweaks & Workbench theming

If you want to play around with new colors, use the setting `workbench.colorCustomizations` to customize the currently selected theme. For example, you can add this snippet in your `settings.json` file:

```json
"workbench.colorCustomizations": {
    "tab.activeBackground": "#282c34",
    "activityBar.background": "#282c34",
    "sideBar.background": "#282c34"
}
```

Please check the official [Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) for more information.

## Contributors

Thanks to [阿发](https://github.com/Binaryify) and the [OneDark-Pro](https://github.com//OneDark-Pro) repository which this theme is based on!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img alt="Progracientist" src="https://avatars0.githubusercontent.com/u/30497573?s=460&v=4" width="100"><br><sub><b>Progracientist</b></sub>](https://github.com/beastdestroyer) | [<img alt="Ergenekon Yigit" src="https://avatars3.githubusercontent.com/u/7110136?v=4&s=100" width="100"><br><sub><b>Ergenekon Yigit</b></sub>](https://github.com/ergenekonyigit) | [<img alt="Vladimir Sizikov" src="https://avatars1.githubusercontent.com/u/9781?v=4&s=100" width="100"><br><sub><b>Vladimir Sizikov</b></sub>](https://github.com/vvs) | [<img alt="Harsh Patel" src="https://avatars0.githubusercontent.com/u/3893673?v=4&s=100" width="100"><br><sub><b>Harsh Patel</b></sub>](https://github.com/harshpatel991) | [<img alt="Kamer DINC" src="https://avatars2.githubusercontent.com/u/780118?v=4&s=100" width="100"><br><sub><b>Kamer DINC</b></sub>](https://github.com/merkjs) | [<img alt="Kovacs Nicolas" src="https://avatars0.githubusercontent.com/u/6214452?v=4&s=100" width="100"><br><sub><b>Kovacs Nicolas</b></sub>](https://github.com/nicovak) | [<img alt="Audrey" src="https://avatars1.githubusercontent.com/u/185822?v=4&s=100" width="100"><br><sub><b>Audrey</b></sub>](https://github.com/wersimmon) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img alt="Alexey Svetliakov" src="https://avatars2.githubusercontent.com/u/8881674?v=4&s=100" width="100"><br><sub><b>Alexey Svetliakov</b></sub>](https://github.com/asvetliakov) | [<img alt="Daniel Cervenkov" src="https://avatars3.githubusercontent.com/u/23052054?v=4&s=100" width="100"><br><sub><b>Daniel Cervenkov</b></sub>](https://github.com/dcervenkov) | [<img alt="Ika" src="https://avatars1.githubusercontent.com/u/8341033?v=4&s=100" width="100"><br><sub><b>Ika</b></sub>](https://github.com/ikatyang) | [<img alt="waterdanceTV" src="https://avatars3.githubusercontent.com/u/31411367?v=4&s=100" width="100"><br><sub><b>waterdanceTV</b></sub>](https://github.com/waterdanceTV) | [<img alt="Jonathan Laflamme" src="https://avatars1.githubusercontent.com/u/21099980?v=4&s=100" width="100"><br><sub><b>Jonathan Laflamme</b></sub>](https://github.com/jonathanlaflamme) | [<img alt="Victor" src="https://avatars2.githubusercontent.com/u/24607388?v=4&s=100" width="100"><br><sub><b>Victor</b></sub>](https://github.com/Raul6469) | [<img alt="Garrit Franke" src="https://avatars3.githubusercontent.com/u/32395585?v=4&s=100" width="100"><br><sub><b>Garrit Franke</b></sub>](https://github.com/garritfra) |
| [<img alt="Or3stis" src="https://avatars0.githubusercontent.com/u/11923550?v=4&s=100" width="100"><br><sub><b>Or3stis</b></sub>](https://github.com/Or3stis) | [<img alt="Peter Sdobnov" src="https://avatars1.githubusercontent.com/u/5717247?v=4&s=100" width="100"><br><sub><b>Peter Sdobnov</b></sub>](https://github.com/Zueuk) | [<img alt="Will Stone-stone" src="https://avatars1.githubusercontent.com/u/654103?v=4&s=100" width="100"><br><sub><b>Will Stone</b></sub>](https://github.com/will-stone) | [<img alt="Benas Svipas" src="https://avatars3.githubusercontent.com/u/10441177?v=4&s=100" width="100"><br><sub><b>Benas Svipas</b></sub>](https://github.com/svipben) | [<img alt="Jens Hausdorf" src="https://avatars2.githubusercontent.com/u/11234139?v=4&s=100" width="100"><br><sub><b>Jens Hausdorf</b></sub>](https://github.com/jens1o) | [<img alt="阿发" src="https://avatars3.githubusercontent.com/u/12221718?s=460&v=4" width="100"><br><sub><b>阿发</b></sub>](https://github.com/Binaryify) | [<img alt="Mark Skelton" src="https://avatars2.githubusercontent.com/u/25914066?s=460&v=4&s=100" width="100"><br><sub><b>Mark Skelton</b></sub>](https://github.com/markypython) |
| [<img alt="Gabe M." src="https://avatars0.githubusercontent.com/u/14303404?s=460&v=4&s=100" width="100"><br><sub><b>Gabe M.</b></sub>](https://github.com/gabemeola) |
<!-- ALL-CONTRIBUTORS-LIST:END -->
