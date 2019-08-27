import { Scopes } from '../types'
import { addScope } from '../utils/scopes'

const getScopeKey = (setting: string): string => `foreground:${setting}`

export function processForeground (
  scopes: Scopes,
  scope: string,
  setting: string
): void {
  if (setting === undefined) return

  addScope(
    scopes.normal,
    getScopeKey(setting),
    scope,
    { foreground: setting }
  )
}
