import { useState, useCallback, useRef } from 'react';

// Project-local dependencies
import { ArrayGenerator } from './components/ArrayGenerator';
import { SortSelector, SortAlgorithm } from './components/SortSelector';
import { SortArray } from './components/SortArray';
import { ArrayGraphics } from './components/ArrayGraphics';
import { generateArray, ArrayOptions } from './utils/array';
import {
  AnimationStep as AnimatedStep,
  animatedSelectionSort,
  animatedBubbleSort,
  animatedInsertionSort
} from './utils/sorting';

interface SortState {
  algorithm: SortAlgorithm;
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
  const [isSorting, setIsSorting] = useState(false);
  const [highlightData, setHighlightData] = useState<AnimatedStep | null>(null);

  const isSortingRef = useRef(false);
  const sortStateRef = useRef(sortState);
  const arrayRef = useRef(array);

  isSortingRef.current = isSorting;
  sortStateRef.current = sortState;
  arrayRef.current = array;

  const handleSort = useCallback(async () => {
    if (isSortingRef.current || arrayRef.current.length === 0) return;
    setIsSorting(true);

    const arr = [...arrayRef.current];
    let steps: AnimatedStep[] = [];

    const algo = sortStateRef.current.algorithm;
    switch (algo) {
      case 'selection':
        steps = animatedSelectionSort(arr);
        break;
      case 'bubble':
        steps = animatedBubbleSort(arr);
        break;
      case 'insertion':
        steps = animatedInsertionSort(arr);
        break;      
      // TODO: animatedMergeSort, animatedQuickSort
      default:
        steps = [];
        break;
    }

    for (const step of steps) {
      setArray(step.array);
      setHighlightData(step);
      const stepDelay = 50;
      await new Promise(resolve => setTimeout(resolve, stepDelay));
    }

    setIsSorting(false);
  }, []);

  const handleGenerate = useCallback(() => {
    const newArr = generateArray(arrayOptions);
    setArray(newArr);
    setHighlightData(null);
  }, [arrayOptions]);

  return (
    <div className="grid-container">
      <SortSelector
        value={sortState.algorithm}
        onChange={(alg) => setSortState({ algorithm: alg })}
      />
      <ArrayGenerator
        options={arrayOptions}
        onChangeSize={(size) => setArrayOptions({ ...arrayOptions, size })}
        onChangeMax={(max) => setArrayOptions({ ...arrayOptions, max })}
        onGenerateArray={handleGenerate}
      />
      <SortArray
        array={array}
        onSort={handleSort}
        isSorting={isSorting}
      />
      <ArrayGraphics
        array={array}
        highlightData={highlightData}
      />
    </div>
  );
}
