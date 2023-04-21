export default function isValidUrl(str: string): boolean {
  try {
    const _u = new URL(str)
    return true
  }
  catch (err) {
    return false
  }
}
