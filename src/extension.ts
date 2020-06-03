import { readFileSync } from "fs";
import { join } from "path";
import { ExtensionContext, workspace } from "vscode";
import { updateSettings } from "./update-settings";
import { detectConfigChanges } from "./utils";

export async function regenerateTheme() {
  const configuration = workspace.getConfiguration("oneDark");

  updateSettings({
    bold: configuration.get<boolean>("bold"),
    italic: configuration.get<boolean>("italic"),
  });
}

function getCurrentVersion(context: ExtensionContext) {
  const extensionPath = join(context.extensionPath, "package.json");
  const packageFile = JSON.parse(readFileSync(extensionPath, "utf8"));

  return packageFile ? packageFile.version : "0.0.0";
}

const VERSION_KEY = "one-dark-theme:version";

export function activate(context: ExtensionContext): void {
  workspace.onDidChangeConfiguration((event) => {
    detectConfigChanges(event, regenerateTheme);
  });

  const oldVersion = context.globalState.get(VERSION_KEY);
  const currentVersion = getCurrentVersion(context);

  if (oldVersion !== currentVersion) {
    regenerateTheme().then(() => {
      context.globalState.update(VERSION_KEY, currentVersion);
    });
  }
}
