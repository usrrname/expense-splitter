export const largest = (a: number, b: number) => {
  if (a > b)
    return a/b;
  else if (a === b)
    return 0;
  else
    return b/a;
}