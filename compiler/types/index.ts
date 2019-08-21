export interface TokenMap {
  [setting: string]: string[]
}

export interface Tokens {
  normal: TokenMap
  italic: TokenMap
}

export type Scope = [string, Rules]
export type Rule = string | boolean

export interface Rules {
  foreground?: string
  italic?: Rule
  bold?: Rule
}
