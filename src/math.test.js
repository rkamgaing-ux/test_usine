import test from 'node:test';
import assert from 'node:assert/strict';
import { multiply } from './math.js';

test('multiply returns 6 for 2 and 3', () => {
  // Given a = 2 and b = 3
  // When multiply is called
  const result = multiply(2, 3);
  // Then the product is 6
  assert.equal(result, 6);
});

test('multiply returns -5 for -1 and 5', () => {
  assert.equal(multiply(-1, 5), -5);
});
