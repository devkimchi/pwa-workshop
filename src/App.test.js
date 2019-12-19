import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('List H1이 잘 생성됩니다', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/List/i);
  expect(linkElement).toBeInTheDocument();
});
