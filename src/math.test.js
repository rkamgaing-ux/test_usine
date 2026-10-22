import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './math.js';

test('add returns 5 for 2 and 3', () => {
  assert.equal(add(2, 3), 5);
});

test('add returns 0 for -1 and 1', () => {
  assert.equal(add(-1, 1), 0);
});
