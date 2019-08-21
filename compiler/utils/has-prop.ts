export default function hasProp (obj: any, prop: string) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
