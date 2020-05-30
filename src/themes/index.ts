import { ThemeConfiguration } from "../models";
export { generateTheme } from "./generator";

export const defaultConfig: Required<ThemeConfiguration> = {
  bold: false,
  italic: true,
  italicAttributes: true,
  vivid: false,
};
