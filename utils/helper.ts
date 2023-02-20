export function sleep (msec:number):Promise<void> {
  if (!msec) { return Promise.resolve() }
  return new Promise(resolve => setTimeout(resolve, msec))
}
