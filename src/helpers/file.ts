import * as fs from 'fs'

export async function writeFile(path: string, data: any) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), err =>
      err ? reject(err) : resolve()
    )
  })
}

export async function readFile(path: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, err => (err ? reject(err) : resolve()))
  })
}
