import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from './components/Paragraph';

test('renders learn react link', () => {
  render(<Paragraph />);
  const linkElement = screen.getByText(/This is test/i);
  expect(linkElement).toBeInTheDocument();
});
