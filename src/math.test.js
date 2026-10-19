import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './math.js';

test('add retourne la somme de deux entiers positifs', () => {
  assert.equal(add(2, 3), 5);
});

test('add retourne 0 pour des opposés', () => {
  assert.equal(add(-1, 1), 0);
});

test('add gère les décimaux', () => {
  assert.equal(add(0.5, 0.25), 0.75);
});
