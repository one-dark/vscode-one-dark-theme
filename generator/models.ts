export interface Colors {
  chalky: string
  coral: string
  cyan: string
  error: string
  ivory: string
  malibu: string
  sage: string
  stone: string
  violet: string
  whiskey: string
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
  foreground?: string
  fontStyle?: FontStyle
}

export interface TokenGroup {
  name?: string
  scope?: string[]
  settings?: TokenSettings
}
