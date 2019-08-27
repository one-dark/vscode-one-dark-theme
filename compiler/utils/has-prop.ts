export function hasProp (obj: any, prop: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
