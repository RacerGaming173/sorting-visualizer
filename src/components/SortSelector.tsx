import '../styles/SortSelector.css';

export type SortAlgorithm = 'bubble' | 'selection' | 'insertion' | 'merge' | 'quick';

interface SortSelectorProps {
  value: SortAlgorithm;
  onChange: (algorithm: SortAlgorithm) => void;
}

const sortAlgorithms = [
  { value: 'bubble', label: 'Bubble Sort' },
  { value: 'selection', label: 'Selection Sort' },
  { value: 'insertion', label: 'Insertion Sort' },
  { value: 'merge', label: 'Merge Sort' },
  { value: 'quick', label: 'Quick Sort' },
];

export function SortSelector({ value, onChange }: SortSelectorProps): JSX.Element {

  const handleSelect = (algorithm: SortAlgorithm) => {
    onChange(algorithm);
  };

  return (
    <div className="sort-selector-container">
      <label htmlFor="sort-algorithm-select">Choose Sorting Algorithm</label>
      <select
        id="sort-algorithm-select"
        value={value}
        onChange={(e) => handleSelect(e.target.value as SortAlgorithm)}
      >
        {sortAlgorithms.map((alg) => (
          <option key={alg.value} value={alg.value}>
            {alg.label}
          </option>
        ))}
      </select>
    </div>
  );
}

