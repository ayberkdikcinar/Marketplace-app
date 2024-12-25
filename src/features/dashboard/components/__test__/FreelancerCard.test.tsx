import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FreelancerCard from '../FreelancerCard';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import type { User } from '../../../types';

describe('FreelancerCard', () => {
  const mockUser: User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    photo: 'https://via.placeholder.com/150',
    city: 'New York',
    finished_job_count: 10,
    id: 1,
    username: 'john_doe',
    website: 'https://example.com',
  };

  const mockOnClick = vi.fn();
  it('renders the user information correctly', () => {
    render(
      <BrowserRouter>
        <FreelancerCard user={mockUser} onClick={mockOnClick} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
  });

  it('calls onClick when the button is clicked', () => {
    render(<FreelancerCard user={mockUser} onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders the user avatar correctly', () => {
    render(<FreelancerCard user={mockUser} onClick={mockOnClick} />);

    const avatar = screen.getByAltText(mockUser.name);
    expect(avatar).toHaveAttribute('src', mockUser.photo);
  });
});
