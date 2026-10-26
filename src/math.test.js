import { test } from 'node:test';
import assert from 'node:assert';
import { multiply } from './math.js';

test('multiply returns 6 for 2 and 3', () => {
  assert.strictEqual(multiply(2, 3), 6);
});

test('multiply returns -5 for -1 and 5', () => {
  assert.strictEqual(multiply(-1, 5), -5);
});

test('multiply returns 0 when one operand is 0', () => {
  assert.strictEqual(multiply(0, 7), 0);
});
