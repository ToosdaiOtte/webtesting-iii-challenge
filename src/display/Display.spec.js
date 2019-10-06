// Test away!
import React from 'react';
import { render, getByText } from '@testing-library/react';
import Display from './Display';

test('renders without crashing', () => {
    render(<Display />);
});

test('gate defaults to unlocked and open', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/open/i);
});