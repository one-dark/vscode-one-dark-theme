import { readYaml } from './utils/io'
import { processBold, processForeground, processItalic } from './processors'
import { Tokens, Scope, Rules } from './types'

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

function loadScopes (filePath: string): Scope[] {
  return Object
    .entries(readYaml(filePath))
    .map(([scope, rules]: [string, string | Rules]) =>
      typeof rules === 'string'
        // non-object rules are assumed to be the foreground color
        ? [scope, { foreground: rules }]
        : [scope, rules]
    )
}
