import { test } from 'node:test';
import assert from 'node:assert/strict';
import { multiply } from './math.js';

test('multiply(2, 3) returns 6', () => {
  assert.equal(multiply(2, 3), 6);
});

test('multiply(-1, 5) returns -5', () => {
  assert.equal(multiply(-1, 5), -5);
});
