function randomUTF16CharCode(): number {
  const startAt = 0xff61;
  const endAt = 0xff9f;
  const range = endAt - startAt;
  const code = Math.floor(Math.random() * range) + startAt;
  return code;
}

export function replaceRandomCharactor(
  str: string,
  startAt: number = 0,
): string {
  if (!str) {
    return "";
  }
  const strArray: string[] = [...str];
  return strArray
    .map((char, index) => {
      if (index < startAt) {
        return char;
      }
      return String.fromCharCode(randomUTF16CharCode());
    })
    .join("");
}
