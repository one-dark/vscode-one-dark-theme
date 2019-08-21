import { readYaml } from './utils/io'
import { processBold, processForeground, processItalic } from './processors'
import { Settings } from './types'

function loadScopes (filePath: string): [string, Settings][] {
  return Object
    .entries(readYaml(filePath))
    .map(([scope, settings]: [string, Settings]) =>
      typeof settings === 'string'
        // non-object settings are assumed to be the foreground color
        ? [scope, { foreground: settings }]
        : [scope, settings]
    )
}

export default function loadTokens (tokens: Tokens, filePath: string): void {
  for (const [scope, rules] of loadScopes(filePath)) {
    processBold(tokens, scope, rules.bold)
    processForeground(tokens, scope, rules.foreground)
    processItalic(tokens, scope, rules.italic)
  }
}
