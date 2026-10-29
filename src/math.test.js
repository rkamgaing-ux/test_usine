import { test } from 'node:test';
import assert from 'node:assert/strict';
import { multiply, divide } from './math.js';

test('multiply(2, 3) returns 6', () => {
  assert.equal(multiply(2, 3), 6);
});

test('multiply(-1, 5) returns -5', () => {
  assert.equal(multiply(-1, 5), -5);
});

test('multiply(0, 7) returns 0', () => {
  assert.equal(multiply(0, 7), 0);
});

test('divide(6, 3) returns 2', () => {
  assert.equal(divide(6, 3), 2);
});

test('divide(-8, 2) returns -4', () => {
  assert.equal(divide(-8, 2), -4);
});

test('divide(1, 0) throws', () => {
  assert.throws(() => divide(1, 0), RangeError);
});
