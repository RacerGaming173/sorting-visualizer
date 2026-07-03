/**
 * Represents a single step in the sorting animation.
 * Each step captures the full array state plus metadata for highlighting.
 */
export interface AnimationStep {
  array: number[];
  comparing: [number, number] | null;
  sortedPrefix: number;
}

/**
 * Records one step into the steps array.
 */
function recordStep(
  steps: AnimationStep[],
  array: number[],
  comparing: [number, number] | null,
  sortedPrefix: number
): void {
  steps.push({
    array: [...array],
    comparing,
    sortedPrefix,
  });
}

export function bubbleSort(arr: number[]): number[] {
  const steps: AnimationStep[] = [];

  let swapOccurred = false;

  do {
    swapOccurred = false;
    
    for (let i = 0; i < arr.length - 1; i++)  {
      recordStep(steps, arr, [i, i+1], i);
      if (arr[i] > arr[i+1])  {
        swapOccurred = true;
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  } while (swapOccurred);
  (bubbleSort as any).__steps = steps;
  return arr;
}

export function animatedBubbleSort(arr: number[]): AnimationStep[] {
  bubbleSort(arr);
  return (bubbleSort as any).__steps || [];
}

export function selectionSort(arr: number[]): number[] {
  const steps: AnimationStep[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      recordStep(steps, arr, [i, j], i);
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        recordStep(steps, arr, [i, j], i);
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }

  (selectionSort as any).__steps = steps;
  return arr;
}

export function animatedSelectionSort(arr: number[]): AnimationStep[] {
  selectionSort(arr);
  return (selectionSort as any).__steps || [];
}

export function insertionSort(arr: number[]): number[] {
  const steps: AnimationStep[] = [];
  
  for (let i = 1; i < arr.length; i++)  {
    let j = i-1;
    let refPoint = arr[i];
    while (j >= 0 && refPoint < arr[j]) {
      recordStep(steps, arr, [i, j], i);
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = refPoint;
    recordStep(steps, arr, [i, j], i);
  }
  
  (insertionSort as any).__steps = steps;
  return arr;
}

export function animatedInsertionSort(arr: number[]): AnimationStep[] {
  insertionSort(arr);
  return (insertionSort as any).__steps || [];
}

export function mergeSort(arr: number[]): number[] {
  // TODO: implement
  return arr;
}

export function quickSort(arr: number[]): number[] {
  // TODO: implement
  return arr;
}
