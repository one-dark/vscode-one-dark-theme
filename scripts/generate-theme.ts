import { join } from "path";
import { defaultConfig, generateTheme } from "../src/themes";
import { writeFile } from "../src/utils/file";

writeFile(
  join(__dirname, "..", "themes", "one-dark.json"),
  generateTheme(defaultConfig)
);
