import React from 'react';
import { render, screen } from '@testing-library/react';
import operate from '../logic/operate';

test('renders learn react link', () => {
  expect(operate('3', '4', '+')).toBe('7');
});
