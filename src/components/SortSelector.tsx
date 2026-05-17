import { useState } from 'react';
import '../index.css';

type SortAlgorithm = 'bubble' | 'selection' | 'insertion' | 'merge' | 'quick';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (algorithm: SortAlgorithm) => {
    onChange(algorithm);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="sort-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{ textAlign: 'center' }}
      >
        Choose Sorting Algorithm
      </button>

      {isOpen && (
        <div className="sort-selector-dropdown">
          {sortAlgorithms.map((alg) => (
            <div
              key={alg.value}
              className={`sort-selector-item ${value === alg.value ? 'active' : ''}`}
              onMouseEnter={(e: React.MouseEvent) => { e.currentTarget.style.cursor = 'pointer'; }}
              onClick={() => handleSelect(alg.value)}
            >
              {alg.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

