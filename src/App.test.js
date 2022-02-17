import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('TEST 1 - button changes sign to open and green or closed and red. TEST 2 - button changes text content', () => {
  render(<App />);
  const openBtn = screen.getByRole('open-button');
  const sign = screen.getByRole('sign');
  const closeBtn = screen.getByRole('close-button');

  fireEvent.click(openBtn);
  expect(sign.style.backgroundColor).toBe('green');
  expect(sign.textContent).toContain('The Zoo is OPEN!');

  fireEvent.click(closeBtn);
  expect(sign.style.backgroundColor).toBe('red');
  expect(sign.textContent).toContain('The Zoo is CLOSED!');

  //second test
  const monkeyBtn = screen.getByRole('monkey-btn');
  const animal = screen.getByRole('animal');

  fireEvent.click(monkeyBtn);
  expect(animal.textContent).toContain('🐒');
  expect(animal.style.fontSize).toBe('5rem');
});
