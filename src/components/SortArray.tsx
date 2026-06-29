import '../styles/SortArray.css';

interface SortArrayProps {
  array: number[];
  onSort: () => void;
  isSorting: boolean;
}

export function SortArray({
  array,
  onSort,
  isSorting
}: SortArrayProps): JSX.Element {

  return (
    <div className="sort-array-container">
      <button onClick={onSort} disabled={isSorting || array.length === 0}>
        {isSorting ? 'Sorting...' : 'Sort'}
      </button>
      {array.length > 0 && (
        <span className="array-size">Array size: {array.length}</span>
      )}
    </div>
  );
}
