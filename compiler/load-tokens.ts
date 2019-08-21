import { readYaml } from './utils/io'
import { processBold, processForeground, processItalic } from './processors'
import { Config } from './types'

/**
 * PUBLIC FUNCTIONS
 * --------------------------------------------------
 */

export default function loadTokens (tokens: Tokens, filePath: string) {
  for (const [scope, rules] of loadScopes(filePath)) {
    processBold(tokens, scope, rules.bold)
    processForeground(tokens, scope, rules.foreground)
    processItalic(tokens, scope, rules.italic)
  }
}

/**
 * PRIVATE FUNCTIONS
 * --------------------------------------------------
 */

function loadScopes (filePath: string): [string, Config.Settings][] {
  return Object
    .entries(readYaml(filePath))
    .map(([scope, settings]: [string, Config.Settings]) =>
      typeof settings === 'string'
        // non-object settings are assumed to be the foreground color
        ? [scope, { foreground: settings }]
        : [scope, settings]
    )
}
