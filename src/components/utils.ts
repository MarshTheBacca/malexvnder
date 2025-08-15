/**
 * Replace spaces with hyphens and convert to lowercase
 * @param id The string to sanitise
 * @returns The sanitised string
 */
export function sanitiseID(id: string): string {
  return id.toLowerCase().replace(/\s+/g, '-')
}
