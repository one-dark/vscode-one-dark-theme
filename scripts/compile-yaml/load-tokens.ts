import { readYaml } from './io-utils'

export interface TokenMap {
  [setting: string]: string[]
}

export interface Tokens {
  normal: TokenMap,
  italic: TokenMap
}

// function flatMap<T, U> (
//   array: T[],
//   callback: (value: T, index: number, array: T[]) => U[]
// ): U[] {
//   return Array.prototype.concat(...array.map(callback))
// }

export default function loadTokens (tokens: Tokens, filePath: string) {
  const config = Object
    .entries(readYaml(filePath))
    .map(([key, value]) =>
      typeof value === 'string'
        ? [key, { foreground: value }]
        : [key, value]
    )

  for (const [scope, value] of config) {
    console.log(scope)
    console.log(value)
  }
}
