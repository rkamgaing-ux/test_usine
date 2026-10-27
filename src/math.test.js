import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './math.js';

test('add returns the sum of two positive integers', () => {
  assert.equal(add(2, 3), 5);
});

test('add returns 0 for opposite numbers', () => {
  assert.equal(add(-1, 1), 0);
});

test('add handles decimals', () => {
  assert.equal(add(0.5, 0.25), 0.75);
});
