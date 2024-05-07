'use strict'

const test = require('node:test')
const assert = require('node:assert')

test('1 === 1', async t => {
  assert.equal(1, 1)
})

test('2 === 2', async t => {
  assert.equal(2, 2)
})

test('3 === 3', async t => {
  assert.equal(3, 3)
})
