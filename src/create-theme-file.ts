import { join } from "path";
import { workspace } from "vscode";
import { generateTheme } from "./themes/generator";
import { writeFile } from "./utils/file";

const THEME_PATH = join(__dirname, "..", "themes", "one-dark.json");

export async function createThemeFile() {
  const configuration = workspace.getConfiguration("oneDark");

  const theme = generateTheme({
    bold: configuration.get<boolean>("bold"),
    italic: configuration.get<boolean>("italic"),
    vivid: configuration.get<boolean>("vivid"),
  });

  return writeFile(THEME_PATH, theme);
}
