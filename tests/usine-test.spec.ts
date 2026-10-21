import { describe, it, expect } from 'vitest';

describe('usine-test', () => {
  it('1 + 1 vaut 2', () => {
    // Given
    const a = 1;
    const b = 1;

    // When
    const result = a + b;

    // Then
    expect(result).toBe(2);
  });
});
