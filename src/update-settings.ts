import { ThemeConfiguration } from "./models";
import { boldItalicTokens, boldTokens, italicTokens } from "./themes";

export function updateSettings(configuration: ThemeConfiguration) {
  return [
    configuration.italic && italicTokens,
    configuration.bold && boldTokens,
    configuration.bold && configuration.italic && boldItalicTokens,
  ].filter(Boolean);
}
