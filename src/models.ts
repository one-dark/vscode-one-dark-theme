export interface ThemeConfiguration {
  bold?: boolean
  italic?: boolean
  vivid?: boolean
}

export type FontStyle =
  | "normal"
  | "italic"
  | "bold"
  | "underline"
  | "bold underline"
  | "bold italic"
  | "italic underline"
  | ""

export interface TokenSettings {
  fontStyle?: FontStyle
  foreground?: string
}

export interface TokenGroup {
  name?: string
  scope?: string[]
  settings?: TokenSettings
}
