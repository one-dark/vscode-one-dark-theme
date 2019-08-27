import { promises as fs } from 'fs'
import { join } from 'path'
import { ScopeMap, Scopes } from './types'
import { OUTPUT_DIRECTORY } from './utils/io'
import { PRETTY_PRINT_JSON } from './utils/env'

const writeFile = (filename: string, scopeMap: ScopeMap): Promise<void> =>
  fs.writeFile(
    join(OUTPUT_DIRECTORY, `${filename}.json`),
    JSON.stringify(scopeMap, null, PRETTY_PRINT_JSON ? 2 : 0)
  )

export async function writeScopes (scopes: Scopes): Promise<void> {
  await Promise.all([
    writeFile('theme', scopes.normal),
    writeFile('bold', scopes.bold),
    writeFile('italic', scopes.italic)
  ])
}
