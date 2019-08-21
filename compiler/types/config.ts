export type Setting = string | boolean

export interface Settings {
  foreground?: string
  italic?: Setting
  bold?: Setting
}

export interface SettingsMap {
  [scope: string]: Settings
}
