import React from 'react';
import { render, screen } from '@testing-library/react';
import operate from '../logic/operate';

// test sum operation
test('adds 3 + 4 to equal 7', () => {
  expect(operate('3', '4', '+')).toBe('7');
});

// test subtraction operation
test('Subtract 12 - 4 to equal 8', () => {
    expect(operate('12', '4', '-')).toBe('8');
  });