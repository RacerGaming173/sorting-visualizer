export function bubbleSort(arr: number[]): number[] {
  // TODO: implement
  return arr;
}

export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length-1; i++) {
    let min = arr[i];

    for (let j = i+1; j < arr.length; j++)  {
      if (arr[j] < min) {
        min = arr[j];
      }
    }
  }
  return arr;
}

export function insertionSort(arr: number[]): number[] {
  // TODO: implement
  return arr;
}

export function mergeSort(arr: number[]): number[] {
  // TODO: implement
  return arr;
}

export function quickSort(arr: number[]): number[] {
  // TODO: implement
  return arr;
}