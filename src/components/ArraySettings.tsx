import { useState } from 'react';
import { generateArray } from '../utils/array.ts';
import '../styles/ArraySettings.css'

export type SortAlgorithm = 'bubble' | 'selection' | 'insertion' | 'merge' | 'quick';

interface ArraySettingsProps {
  onGenerateArray: (options: { count: number; max: number }) => void;
  onSelectAlgorithm: (algorithm: SortAlgorithm) => void;
  onSort: (algorithm: SortAlgorithm) => void;
  isSorting: boolean;
}

export function ArraySettings({
  onGenerateArray,
  onSelectAlgorithm,
  onSort,
  isSorting
}: ArraySettingsProps): JSX.Element {
  const [generatedArray, setGeneratedArray] = useState<string>('');

  const handleGenerateArray = () => {
    const options = { count: 5, max: 100 };
    const arr = generateArray(options);
    setGeneratedArray(JSON.stringify(arr));
  };

  return (
    <div className='array-settings-container'>

      <div className='array-param'>
        <label htmlFor="array-size-input">Array Size</label>
        <input type="number" id="array-size-input" min="2" max="100000" defaultValue="20"/>
      </div>
      <div className='array-param'>
        <label htmlFor="min-value-input">Minimum Value</label>
        <input type="number" id="min-value-input" min="0" max="100000" defaultValue="0"/>
      </div>
      <div className='array-param'>
        <label htmlFor="max-value-input">Maximum Value</label>
        <input type="number" id="max-value-input" min="2" max="100000" defaultValue="100"/>
      </div>
      <button onClick={handleGenerateArray}>Generate Array</button>
      {/* <p>{generatedArray || 'Press Generate Array to see output'}</p> */}
    </div>
  );
}
