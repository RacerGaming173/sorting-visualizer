import { useState } from 'react';

// Project-local dependencies
import { ArrayGenerator } from './components/ArrayGenerator';
import { SortSelector, SortAlgorithm } from './components/SortSelector';
import { ArrayGraphics } from './components/ArrayGraphics';
import { generateArray, ArrayOptions } from './utils/array';
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
const ALGORITHM_NAMES: Record<keyof typeof bubbleSort, string> = {
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
  algorithm: SortAlgorithm;
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
    size: 20,
    max: 100
  });
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

  return (
    <div className="grid-container">
      <SortSelector 
      value={sortState.algorithm}
      onChange={(alg) => setSortState({algorithm: alg })} />
      <ArrayGenerator
      options={arrayOptions}
      onChangeSize={(size) => setArrayOptions({...arrayOptions, size})}
      onChangeMax={(max) => setArrayOptions({...arrayOptions, max})}
      onGenerateArray={() => setArray(generateArray(arrayOptions))}
      />
      <ArrayGraphics {...{} } />
    </div>
  );
}
