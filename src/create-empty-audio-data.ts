import type { AudioData } from './types';

/**
 * Returns a zeroed-out AudioData object.
 * Useful for rendering plugins in a paused/idle state, or for unit tests.
 */
export function createEmptyAudioData(): AudioData {
  return {
    frequencyData: new Uint8Array(128),
    timeDomainData: new Uint8Array(256),
    bassLevel: 0,
    midLevel: 0,
    trebleLevel: 0,
    volume: 0,
    energy: 0,
    beatDetected: false,
    bpm: 0,
    bassChange: 0,
    volumeChange: 0,
  };
}
