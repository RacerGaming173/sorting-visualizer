import { ArrayOptions } from '../utils/array.ts';
import '../styles/ArrayGenerator.css'

interface ArrayGeneratorProps {
  options: ArrayOptions;
  onGenerateArray: () => void;
  onChangeSize: (size: number) => void;
  onChangeMax: (max: number) => void;
}

export function ArrayGenerator({
  options,
  onGenerateArray,
  onChangeSize,
  onChangeMax
}: ArrayGeneratorProps): JSX.Element {
  const handleChangeSize = (arraySize: number) => {
    onChangeSize(arraySize);
  };

  const handleChangeMax = (maxValue: number) => {
    onChangeMax(maxValue);
  };

  const handleGenerateArray = () => {
    if (options.size < 2 || options.size > 100000)  {
      const input: HTMLInputElement = document.getElementById('array-size-input') as HTMLInputElement;
      input.setCustomValidity("Please submit a size between 2 and 100000.");
      input.reportValidity();
    }
    else if (options.max < 1 || options.max > 100000)  {
      const input: HTMLInputElement = document.getElementById('max-value-input') as HTMLInputElement;
      input.setCustomValidity("Please submit a maximum value between 1 and 100000.");
      input.reportValidity();
    }
    else  {
      onGenerateArray();
    }
  };

  return (
    <div className='array-generator-container'>

      <div className='array-param'>
        <label htmlFor="array-size-input">Array Size</label>
        <input 
        type="number" 
        id="array-size-input" 
        min="2" max="100000" 
        defaultValue={options.size} 
        onChange={(e) => handleChangeSize(Number(e.target.value))}
        />
      </div>
      <div className='array-param'>
        <label htmlFor="max-value-input">Maximum Value</label>
        <input 
        type="number" 
        id="max-value-input" 
        min="1" 
        max="100000" 
        defaultValue={options.max} 
        onChange={(e) => handleChangeMax(Number(e.target.value))}/>
      </div>
      <button onClick={handleGenerateArray}>Generate Array</button>
      <p></p>
    </div>
  );
}
