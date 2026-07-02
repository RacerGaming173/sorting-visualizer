import '../styles/ArrayGraphics.css';

interface HighlightData {
  comparing: [number, number] | null;
  sortedPrefix: number;
}

interface ArrayGraphicsProps {
  array: number[];
  highlightData: HighlightData | null;
}

export function ArrayGraphics({
  array,
  highlightData
}: ArrayGraphicsProps): JSX.Element {
  const max = Math.max(...array, 1);
  const hd = highlightData;

  return (
    <div className="array-graphics-container">
      {array.map((value, index) => {
        const isComparing = hd !== null && hd.comparing !== null
          && (index === hd.comparing[0] || index === hd.comparing[1]);
        const isSwapped = isComparing && hd !== null && hd.swapped;
        const isInSorted = hd !== null && index < hd.sortedPrefix;

        let bgColor = '#ffffff';
        if (isSwapped) {
          bgColor = '#ff6b6b';       // swapped — red
        } else if (isComparing) {
          bgColor = '#ffd93d';       // comparing — yellow
        } else if (isInSorted) {
          bgColor = '#6bcb77';       // sorted — green
        }

        return (
          <div
            key={index}
            title={`[${index}]: ${value}`}
            className="array-bar"
            style={{
              height: `${(value / max) * 100}%`,
              minHeight: '1px',
              background: bgColor,
              borderRadius: '3px 3px 0 0',
              transition: 'height 0.1s ease, background 0.1s ease',
            }}
          />
        );
      })}
    </div>
  );
}
