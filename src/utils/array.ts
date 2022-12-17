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
