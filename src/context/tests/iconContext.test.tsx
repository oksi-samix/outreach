/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom/';
import { render, screen, fireEvent } from '@testing-library/react';
import { IconsProvider, useIconsContext } from '../iconsContext';

const TestComponent = () => {
  const { selectedIcon, handleClick, resetSelection } = useIconsContext();
  return (
    <div>
      <span data-testid="icon-value">{selectedIcon}</span>
      <button onClick={() => handleClick('phone')}>Change to Phone</button>
      <button onClick={resetSelection}>Reset</button>
    </div>
  );
};

const renderWithContext = (ui: React.ReactElement) => {
  return render(<IconsProvider>{ui}</IconsProvider>);
};

describe('IconsContext', () => {
  test('initial context value is "message"', () => {
    renderWithContext(<TestComponent />);
    const iconValue = screen.getByTestId('icon-value');
    expect(iconValue).toHaveTextContent('message');
  });

  test('handleClick updates the context value', () => {
    renderWithContext(<TestComponent />);
    const changeButton = screen.getByText('Change to Phone');
    fireEvent.click(changeButton);
    const iconValue = screen.getByTestId('icon-value');
    expect(iconValue).toHaveTextContent('phone');
  });

  test('resetSelection resets the context value to "message"', () => {
    renderWithContext(<TestComponent />);
    const changeButton = screen.getByText('Change to Phone');
    fireEvent.click(changeButton);
    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);
    const iconValue = screen.getByTestId('icon-value');
    expect(iconValue).toHaveTextContent('message');
  });

  test('throws error when context is used outside provider', () => {
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => render(<TestComponent />)).toThrowError(
      'useIconsContext must be used within a IconsProvider'
    );

    console.error = originalError;
  });
});
