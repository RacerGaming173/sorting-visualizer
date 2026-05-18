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
  const [size, setSize] = useState<number>(20);
  const [maxValue, setMaxValue] = useState<number>(100);

  const handleGenerateArray = () => {
    if (size < 2 || size > 100000)  {
      const input: HTMLInputElement = document.getElementById('array-size-input') as HTMLInputElement;
      input.setCustomValidity("Please submit a size between 2 and 100000.");
      input.reportValidity();
    }
    else if (maxValue < 1 || maxValue > 100000)  {
      const input: HTMLInputElement = document.getElementById('max-value-input') as HTMLInputElement;
      input.setCustomValidity("Please submit a maximum value between 1 and 100000.");
      input.reportValidity();
    }
    else  {
      const options: {count: number, max: number} = {count: size, max: maxValue};
      const arr = generateArray(options);
      setGeneratedArray(JSON.stringify(arr));
    }
  };

  return (
    <div className='array-settings-container'>

      <div className='array-param'>
        <label htmlFor="array-size-input">Array Size</label>
        <input 
        type="number" 
        id="array-size-input" 
        min="2" max="100000" 
        defaultValue={size} 
        onChange={(e) => setSize(parseInt(e.target.value))}
        />
      </div>
      <div className='array-param'>
        <label htmlFor="max-value-input">Maximum Value</label>
        <input 
        type="number" 
        id="max-value-input" 
        min="1" 
        max="100000" 
        defaultValue={maxValue} 
        onChange={(e) => setMaxValue(parseInt(e.target.value))}/>
      </div>
      <button onClick={handleGenerateArray}>Generate Array</button>
    </div>
  );
}
