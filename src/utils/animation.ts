import { useState, useEffect, useCallback } from 'react';

import { useCallback, useRef } from 'react';

export interface AnimationStep {
  index: number;
  value: number;
  color: string;
  duration: number;
}

export function useAnimation(
  onUpdate: (step: AnimationStep) => void,
  onCleanup: () => void,
  initialDuration: number
): {
  steps: AnimationStep[];
  setSteps: (steps: AnimationStep[]) => void;
  duration: number;
  setDuration: (d: number) => void;
  reset: () => void;
} {
  const stepIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const stepsRef = useRef<AnimationStep[]>([]);
  const durationRef = useRef(initialDuration);

  const run = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    stepIndexRef.current = 0;

    const tick = () => {
      if (stepIndexRef.current >= stepsRef.current.length) {
        rafRef.current = null;
        onCleanup();
        return;
      }
      const step = stepsRef.current[stepIndexRef.current];
      onUpdate(step);
      stepIndexRef.current++;
      rafRef.current = window.setTimeout(tick, durationRef.current / Math.max(stepsRef.current.length, 1));
    };

    tick();
  }, [onUpdate, onCleanup]);

  const setSteps = useCallback((steps: AnimationStep[]) => {
    stepsRef.current = steps;
    run();
  }, [run]);

  const setDuration = useCallback((d: number) => {
    durationRef.current = d;
  }, []);

  const reset = useCallback(() => {
    stepIndexRef.current = 0;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    onCleanup();
  }, [onCleanup]);

  return { steps: stepsRef.current, setSteps, duration: durationRef.current, setDuration, reset };
}
