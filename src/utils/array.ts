export type ArrayOptions = {
  count: number;
  max: number;
};

export function generateArray(options: ArrayOptions): number[] {
  const unsorted_array: number[] = [];
  for (let i = 0; i < options.count; i++) {
    unsorted_array[i] = Math.round(Math.random() * options.max);
  }
  return unsorted_array;
}

export function getArrayStats(arr: number[]): {
  max: number;
  sum: number;
  average: number;
} {
  
  let sum: number = 0;
  let max: number = 0;
  
  for (let i = 0; i < arr.length; i++)  {
    sum += arr[i];
    
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let average: number = sum / arr.length;

  return {max, sum, average};
}
