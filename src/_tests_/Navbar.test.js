/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../pages/Navbar';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
        <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});