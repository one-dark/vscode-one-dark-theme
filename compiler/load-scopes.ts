import { processBold, processForeground, processItalic } from './processors'
import { Scopes, Settings } from './types'
import { readYaml } from './utils/io'

function loadSettings (filePath: string): [string, Settings][] {
  return Object
    .entries(readYaml(filePath))
    .map(([scope, settings]: [string, Settings]) =>
      typeof settings === 'string'
        // non-object settings are assumed to be the foreground color
        ? [scope, { foreground: settings }]
        : [scope, settings]
    )
}

export default function loadScopes (scopes: Scopes, filePath: string): void {
  for (const [scope, rules] of loadSettings(filePath)) {
    processBold(scopes, scope, rules.bold)
    processForeground(scopes, scope, rules.foreground)
    processItalic(scopes, scope, rules.italic)
  }
}
