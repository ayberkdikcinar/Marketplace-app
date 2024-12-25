import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Expandable from '../Expandable';
import '@testing-library/jest-dom';
describe('Expandable', () => {
  it('should render the label correctly', () => {
    render(<Expandable label='Details' />);
    expect(screen.getByText('Show Details')).toBeInTheDocument();
  });

  it('should toggle content visibility when label is clicked', () => {
    render(
      <Expandable label='Details'>
        <div>Content</div>
      </Expandable>
    );

    const label = screen.getByText('Show Details');
    fireEvent.click(label);
    expect(screen.getByText('Hide Details')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();

    fireEvent.click(label);
    expect(screen.getByText('Show Details')).toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('should render content by default if isExpandedDefault is true', () => {
    render(
      <Expandable label='Details' isExpandedDefault>
        <div>Content</div>
      </Expandable>
    );

    expect(screen.getByText('Hide Details')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should not render content by default if isExpandedDefault is false', () => {
    render(
      <Expandable label='Details' isExpandedDefault={false}>
        <div>Content</div>
      </Expandable>
    );

    expect(screen.getByText('Show Details')).toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
});
