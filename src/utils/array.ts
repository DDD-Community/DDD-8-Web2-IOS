export const chunk = <T>(arr: T[], len: number): T[][] => {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i++) {
    const chunkIndex = Math.floor(i / len);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [arr[i]];
    } else {
      result[chunkIndex].push(arr[i]);
    }
  }

  return result;
};

export const toggle = <T>(arr: T[], elem: T): T[] => {
  if (arr.includes(elem)) {
    return arr.filter((e) => e !== elem);
  }
  return arr.concat(elem);
};
