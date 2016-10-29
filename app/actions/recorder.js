// @flow
export const CHANGE_INSTRUMENT = 'CHANGE_INSTRUMENT';

export function changeInstrument(instrument) {
  return {
    type: CHANGE_INSTRUMENT,
    instrument
  };
}
