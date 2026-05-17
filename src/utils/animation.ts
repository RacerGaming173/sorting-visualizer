import { useState, useEffect, useCallback } from 'react';

export function useAnimation(
  onUpdate: (index: number, value: number, duration: number) => void,
  onCleanup: () => void,
  initialDuration: number
): void {
  // TODO: implement animation loop using requestAnimationFrame
  // Key features:
  // - Updates bar colors during sort
  // - Closes loop on completion
}
