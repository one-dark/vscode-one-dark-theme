import { readFileSync } from "fs";
import { join } from "path";
import { ExtensionContext, workspace } from "vscode";
import { defaultConfig, generateTheme } from "./themes";
import { detectConfigChanges, promptToReload, writeFile } from "./utils";

const THEME_PATH = join(__dirname, "..", "themes", "one-dark.json");

export async function regenerateTheme() {
  const configuration = workspace.getConfiguration("oneDark");

  const theme = generateTheme({
    bold: configuration.get<boolean>("bold"),
    italic: configuration.get<boolean>("italic"),
    italicAttributes: configuration.get<boolean>("italicAttributes"),
    vivid: configuration.get<boolean>("vivid"),
  });

  return writeFile(THEME_PATH, theme);
}

function isDefaultConfig() {
  const configuration = workspace.getConfiguration("oneDark");

  return Object.keys(defaultConfig).every(
    (key) => defaultConfig[key] === configuration.get(key)
  );
}

function getCurrentVersion(context: ExtensionContext) {
  const extensionPath = join(context.extensionPath, "package.json");
  const packageFile = JSON.parse(readFileSync(extensionPath, "utf8"));

  return packageFile ? packageFile.version : "0.0.0";
}

const VERSION_KEY = "one-dark-theme:version";

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export function activate(context: ExtensionContext): void {
  // Observe changes in the config
  workspace.onDidChangeConfiguration((event) => {
    detectConfigChanges(event, () => {
      // update theme json file with new options
      regenerateTheme().then(promptToReload);
    });
  });

  const oldVersion = context.globalState.get(VERSION_KEY);
  const currentVersion = getCurrentVersion(context);

  // When the theme updates, check if the user's theme settings are different
  // from the defaults. If they are, they will need to reload the theme.
  if (oldVersion !== currentVersion && !isDefaultConfig()) {
    regenerateTheme().then(() => {
      context.globalState.update(VERSION_KEY, currentVersion);
      promptToReload();
    });
  }
}
