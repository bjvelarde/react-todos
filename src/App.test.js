import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My To Do List', () => {
  render(<App />);
  const linkElement = screen.getByText(/My To Do List/i);
  expect(linkElement).toBeInTheDocument();
});
