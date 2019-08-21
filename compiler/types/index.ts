export interface Scope {
  name: string
  scope: string[]
  settings: {
    foreground?: string
    fontStyle?: 'bold' | 'italic'
  }
}

export interface ScopeMap {
  [key: string]: Scope
}

export interface Scopes {
  bold: ScopeMap
  italic: ScopeMap
  normal: ScopeMap
}

export namespace Config {
  export type Setting = string | boolean

  export interface Settings {
    foreground?: string
    italic?: Setting
    bold?: Setting
  }

  export interface Scopes {
    [scope: string]: Settings
  }
}
