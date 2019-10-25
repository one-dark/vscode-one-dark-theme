import { FontStyle } from './font-style'

export interface TokenSettings {
  foreground?: string
  fontStyle?: FontStyle
}

export interface TokenGroup {
  name?: string
  scope?: string[]
  settings?: TokenSettings
}
