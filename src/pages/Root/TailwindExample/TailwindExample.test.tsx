import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { TailwindExample } from './TailwindExample';

describe('TailwindExample', () => {
  it('button changes style when toggled', async () => {
    // Arrange
    render(<TailwindExample></TailwindExample>);
    const initialStyles = (await screen.findByRole('button')).className;

    // Act
    await userEvent.click(screen.getByRole('button'));

    // Assert
    expect((await screen.findByRole('button')).className).not.toBe(initialStyles);
  });
});
