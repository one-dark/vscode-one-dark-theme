export interface Scope {
  scope: string[]
  settings: {
    foreground?: string
    fontStyle?: 'bold' | 'italic'
  }
}

export interface ScopeSettings {
  fontStyle?: 'bold' | 'italic'
  foreground?: string
}

export interface ScopeMap {
  [key: string]: Scope
}

export interface Scopes {
  bold: ScopeMap
  italic: ScopeMap
  normal: ScopeMap
}
