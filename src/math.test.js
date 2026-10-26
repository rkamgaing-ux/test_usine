import { test } from 'node:test';
import assert from 'node:assert/strict';
import { multiply } from './math.js';

test('multiply returns the product of two positive integers', () => {
  // Given a = 2 and b = 3
  // When multiply is called
  const result = multiply(2, 3);
  // Then the result is 6
  assert.equal(result, 6);
});

test('multiply returns a negative product when one operand is negative', () => {
  assert.equal(multiply(-1, 5), -5);
});
