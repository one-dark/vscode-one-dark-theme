const path = require('path');
const yaml = require('yamljs');

/**
 * Reads a yaml file into a JS object
 * @function readYaml
 * @param {string} name - File name without the .yaml extension
 * @param {string} dir - Directory which the file is in.
 *   If empty, it reads from the current directory
 * @returns {object} The parsed yaml file as a JS object
 */
function readYaml(name, dir = 'themes') {
  return yaml.load(path.join(__dirname, dir, `${name}.yaml`));
}

/**
 * Overrides the base styles with custom theme styles
 * @function override
 * @param {object} base - Base styles
 * @param {object} theme - Theme styles
 * @returns {object} Base styles overridden with theme styles
 */
function override(base, theme) {
  // Loop through the sections (i.e. foreground, font style)
  Object.entries(theme).forEach(([sectionName, section]) => {
    // Ignore color settings
    if (sectionName === 'colors') return;

    // Loop through the items (i.e. purple, italic)
    Object.entries(section).forEach(([itemName, scopes]) => {
      base[sectionName][itemName].push(...scopes);
    });
  });

  return base;
}

/**
 * Compiles a theme from the base styles and custom theme styles
 * @function compileTheme
 * @param {string} name - The name of the theme
 * @returns {object} The compiled theme ready to write to a VS Code theme file
 */
function compileTheme(name) {
  // While the base styles could be read once when the file is required,
  //   it gets lost amidst the other functions and since this is a build
  //   process, tiny performance optimizations can be relaxed
  const base = readYaml('base', '');
  // Read the theme configuration
  const theme = readYaml(name);
  // Override the base styles with the theme styles
  const styles = override(base, theme);
  // Setup the token colors array that will be used in the VS Code theme
  const tokenColors = [];

  // Get the colors for the theme
  // The colors from the base are overridden by the theme colors
  const colors = Object.assign(base.colors, theme.colors);

  // Add the foreground colors
  Object.entries(styles.foreground).forEach(([color, scopes]) => {
    tokenColors.push({
      // Namespace the name to make the JSON file easier to understand
      name: `foreground::${color}`,
      scope: scopes,
      settings: {
        // Convert the color string to the hex code
        foreground: colors[color],
      },
    });
  });

  // Add the font styles
  Object.entries(styles.fontStyle).forEach(([style, scopes]) => {
    tokenColors.push({
      // Namespace the name to make the JSON file easier to understand
      name: `fontStyle::${style}`,
      scope: scopes,
      settings: {
        fontStyle: style,
      },
    });
  });

  return { tokenColors };
}

module.exports = compileTheme;
