import { join } from 'path'
import { ScopeMap, Scopes } from './types'
import { OUTPUT_DIRECTORY, writeJson } from './utils/io'

const writeFile = (filename: string, scopeMap: ScopeMap): Promise<void> =>
  writeJson(
    join(OUTPUT_DIRECTORY, `${filename}.json`),
    Object.values(scopeMap)
  )

export async function writeScopes (scopes: Scopes): Promise<void> {
  await Promise.all([
    writeFile('theme', scopes.normal),
    writeFile('bold', scopes.bold),
    writeFile('italic', scopes.italic)
  ])
}
