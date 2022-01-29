import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add your favorite animals to the zoo parade!/i);
  expect(linkElement).toBeInTheDocument();
});
