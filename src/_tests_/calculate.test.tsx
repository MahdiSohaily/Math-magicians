/* eslint-disable no-undef */
import calculate from '../logic/calculate';

// test sum operation
test('adds 10 + 2 and run equivalent operation and expected the total in object to be 12', () => {
  expect(
    calculate(
      {
        total: '10',
        next: '2',
        operation: '+',
      },
      '='
    )
  ).toEqual({ next: '', operation: '', total: '12' });
});

// test Reset operation
test('clicked the reset button and expected the object to be empty', () => {
  expect(
    calculate(
      {
        total: '10',
        next: '2',
        operation: '+',
      },
      'RESET'
    )
  ).toEqual({ next: '', operation: '', total: '' });
});

// test Reset operation
test('clicked the reset button and expected the object to be empty', () => {
  expect(
    calculate(
      {
        total: '',
        next: '',
        operation: '',
      },
      '7'
    )
  ).toEqual({ next: '7', operation: '', total: '' });
});
