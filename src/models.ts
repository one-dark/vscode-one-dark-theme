export interface ThemeConfiguration {
  bold?: boolean;
  italic?: boolean;
}

export type FontStyle =
  | "normal"
  | "italic"
  | "bold"
  | "underline"
  | "bold underline"
  | "bold italic"
  | "italic underline"
  | "";

export interface TokenSettings {
  foreground?: string;
  fontStyle?: FontStyle;
}

export interface TokenGroup {
  name?: string;
  scope?: string[];
  settings?: TokenSettings;
}
