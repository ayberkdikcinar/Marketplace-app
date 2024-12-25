import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Search from '../Search';
import '@testing-library/jest-dom';

describe('Search', () => {
  const setup = () => {
    const utils = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
    const input = utils.getByPlaceholderText('Search...');
    const select = utils.getByTestId('criteria-input');
    const form = utils.getByRole('form');
    return {
      input,
      select,
      form,
      ...utils,
    };
  };

  it('should render search input and select dropdown', () => {
    const { input, select } = setup();
    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });

  it('should update input value on change', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'John' } });
    expect(input).toHaveValue('John');
  });
});
