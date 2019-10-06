// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders without crashing', () => {
    render(<Dashboard />);
});

test('button text change to show what state the door will be in when clicked', () => {
    const {getByText} = render(<Dashboard />);
    const lockButton = getByText (/Lock Gate/);
    const closeButton = getByText (/Close Gate/);
    fireEvent.click(closeButton);
    getByText(/Open Gate/);
    fireEvent.click(lockButton);
    getByText(/Unlock Gate/);
  }); 
