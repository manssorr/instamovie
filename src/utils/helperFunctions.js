export const limitString = (
  str: string,
  limit: number = 20,
  ending: string = '...',
): string => {
  if (str.length > limit) {
    return str.substring(0, limit).trim() + ending;
  }
  return str;
};
