# Configuration

## Basic Configuration

This theme comes with several configuration settings to allow you to customize the theme to your preference. We currently support the following settings:

* **Vivid** - Uses the [One Dark Vivid](https://atom.io/themes/one-dark-vivid-syntax) color palette instead of the default color palette.
* **Italic** - When enabled, uses italic font for keywords. Note that some scopes \(i.e. markdown block quotes\) are styled with italic font even when this setting is disabled.
* **Bold** - When enabled, uses bold font for namespace, class, and function names. Note that some scopes \(i.e. markdown headers\) are styled with bold font even when this setting is disabled.

To access these configuration settings, open the VS Code settings page and search for "One Dark".

![Theme settings](../.gitbook/assets/2019-10-26_11-41-02.png)

This theme ships with the italic setting turned on by default and the other settings turned off by default, but you can adjust the settings to any combination you like.  After updating the settings, you will be prompted to reload the window to apply the configuration changes.

![Theme settings reload prompt](../.gitbook/assets/2019-10-26_12-19-19.png)

## Advanced Customizations

VS Code allows users to fully customize themes to their liking.  If you wish to adjust the editor colors, use the `workbench.colorCustomizations` setting in your `settings.json` file.  An example of this is shown below.

```javascript
"workbench.colorCustomizations": {
  "tab.activeBackground": "#282c34",
  "activityBar.background": "#282c34",
  "sideBar.background": "#282c34"
}
```

To customize the syntax highlighting, use the `editor.tokenColorCustomizations` setting.  An example of this is shown below.

```javascript
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

