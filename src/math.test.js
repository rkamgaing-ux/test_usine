import { test } from 'node:test';
import assert from 'node:assert/strict';
import { multiply } from './math.js';

test('multiply returns the product of two positive integers', () => {
  assert.equal(multiply(2, 3), 6);
});

test('multiply returns a negative product when one operand is negative', () => {
  assert.equal(multiply(-1, 5), -5);
});

test('multiply returns 0 when one operand is zero', () => {
  assert.equal(multiply(0, 7), 0);
});
