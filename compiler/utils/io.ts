import { join } from 'path'
import { promises as fs } from 'fs'
import { load as loadYaml } from 'yamljs'

export const INPUT_DIRECTORY = join(__dirname, '..', '..', 'config')
export const OUTPUT_DIRECTORY = join(__dirname, '..', '..', 'src', 'config')

/**
 * Reads a yaml file into a JS object
 * @param path - The path of the YAML file relative to the config directory.
 * @returns The parsed yaml file as a JS object.
 */
export function readYaml (path: string): any {
  return loadYaml(join(INPUT_DIRECTORY, path))
}

export async function writeJson (path: string, data: any) {
  const directory = path.substring(0, path.lastIndexOf('/'))
  await fs.mkdir(directory, { recursive: true })

  return fs.writeFile(path, JSON.stringify(data))
}

export function listDirectory (path: string): Promise<string[]> {
  return fs.readdir(path)
}
