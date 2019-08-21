import { Tokens, Rule } from '../types'

export function processBold (tokens: Tokens, scope: string, rule: Rule) {
  if (rule === '${{ settings.bold }}') {
    addToken(tokens, scope, true)
  }
}
