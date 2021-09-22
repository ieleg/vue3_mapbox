
export function genID(length = 6) {
  return Math.random().toString(36).substr(3, length);
}