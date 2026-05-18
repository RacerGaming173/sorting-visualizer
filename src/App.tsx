import { useState } from 'react';

// Project-local dependencies
import { ArraySettings } from './components/ArraySettings';
import { SortSelector } from './components/SortSelector';
import { ArrayGraphics } from './components/ArrayGraphics';
import { generateArray, getArrayStats } from './utils/array';
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort
} from './utils/sorting';
import { generateColor } from './utils/animation';

// Icons
import { AiFillCaretRight } from "react-icons/ai";

// Algorithm name mapping
const ALGORITHM_NAMES: Record<string> = {
  bubbleSort: 'Bubble Sort',
  selectionSort: 'Selection Sort',
  insertionSort: 'Insertion Sort',
  mergeSort: 'Merge Sort',
  quickSort: 'Quick Sort'
};

// Algorithm function mapping
const ALGORITHM_FUNCS = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort
};

interface SortState {
  algorithm: 'bubble' | 'selection' | 'insertion' | 'merge' | 'quick';
}

interface AnimationState {
  animation: ReturnType<typeof useAnimation> | null;
  onGenerate: () => void;
  onGenerateRandom: () => void;
  isSorting: boolean;
  isCompleted: boolean;
  isFinished: boolean;
}

export default function App() {
  const [array, setArray] = useState<number[]>([]);
  const [arrayOptions, setArrayOptions] = useState<ArrayOptions>({
    count: 20,
    max: 100
  });
  const [stats, setStats] = useState<{
    min: number;
    max: number;
    sum: number;
    average: number;
  }>({ min: 0, max: 0, sum: 0, average: 0 });
  const [sortState, setSortState] = useState<SortState>({
    algorithm: 'bubble'
  });
  const [animationState, setAnimationState] = useState<AnimationState>({
    animation: null,
    onGenerate: () => { /* TODO */ },
    onGenerateRandom: () => { /* TODO */ },
    isSorting: false,
    isCompleted: false,
    isFinished: false
  });

  // TODO: Implement sort function that:
  // - Calls the selected sorting algorithm on a copy of the array
  // - Animates bar colors during sort
  // - Reports completion when done

  // TODO: Implement generateArray function that:
  // - Generates array based on options
  // - Sets array state
  // - Updates stats
  // - Returns animation state

  return (
    <div className="grid-container">
      <SortSelector value={sortState.algorithm} onChange={(alg) => setSortState({algorithm: alg })} />
      <ArraySettings {...{}} />
      <ArrayGraphics {...{} } />
    </div>
  );
}
