export type ArrayOptions = {
  size: number;
  max: number;
};

export function generateArray(options: ArrayOptions): number[] {
  const unsorted_array: number[] = [];
  for (let i = 0; i < options.size; i++) {
    unsorted_array[i] = Math.round(Math.random() * options.max);
  }
  return unsorted_array;
}
