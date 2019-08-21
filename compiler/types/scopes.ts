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
