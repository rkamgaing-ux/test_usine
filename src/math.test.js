import { test } from 'node:test';
import assert from 'node:assert/strict';
import { divide } from './math.js';

test('divide returns the quotient of two positive numbers', () => {
  assert.equal(divide(6, 3), 2);
});

test('divide handles a negative dividend', () => {
  assert.equal(divide(-8, 2), -4);
});

test('divide returns a non-integer quotient', () => {
  assert.equal(divide(1, 4), 0.25);
});

test('divide returns 0 when the dividend is 0', () => {
  assert.equal(divide(0, 5), 0);
});

test('divide throws when the divisor is 0', () => {
  assert.throws(() => divide(1, 0), { message: 'Division par zéro' });
});

test('divide throws when the divisor is -0', () => {
  assert.throws(() => divide(1, -0), /Division par zéro/);
});
