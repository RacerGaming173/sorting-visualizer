// Control panel component for sorting visualizer
// Provide controls for generating arrays, selecting sort algorithms, and adjusting speed

import { useState } from 'react';
import { generateArray } from '../utils/array.ts';

export type SortAlgorithm = 'bubble' | 'selection' | 'insertion' | 'merge' | 'quick';

interface ControlPanelProps {
  onGenerateArray: (options: { count: number; max: number }) => void;
  onSelectAlgorithm: (algorithm: SortAlgorithm) => void;
  onSort: (algorithm: SortAlgorithm) => void;
  isSorting: boolean;
}

export function ControlPanel({
  onGenerateArray,
  onSelectAlgorithm,
  onSort,
  isSorting
}: ControlPanelProps): JSX.Element {
  const [generatedArray, setGeneratedArray] = useState<string>('');

  const handleGenerateArray = () => {
    const options = { count: 5, max: 100 };
    const arr = generateArray(options);
    setGeneratedArray(JSON.stringify(arr));
  };

  return (
    <>
      <button onClick={handleGenerateArray}>Generate Array</button>
      <p>{generatedArray || 'Press Generate Array to see output'}</p>
    </>
  );
}
