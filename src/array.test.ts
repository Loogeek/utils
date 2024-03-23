import { describe, expect, it } from 'vitest'
import { flattenArrayable, range, toArray } from './array'

describe('toArray', () => {
  it.each([
    [undefined, []],
    [null, []],
    [false, [false]],
    [0, [0]],
    ['', ['']],
    [[], []],
    ['foo', ['foo']],
    [['foo'], ['foo']],
  ])('%s => %s', (input, expected) => {
    expect(toArray(input)).toEqual(expected)
  })
})

it('flattenArrable', () => {
  expect(flattenArrayable()).toEqual([])
  expect(flattenArrayable([])).toEqual([])
  expect(flattenArrayable(1)).toEqual([1])
  expect(flattenArrayable([1, '2', 3])).toEqual([1, '2', 3])
  expect(flattenArrayable([1, [1, 2]])).toEqual([1, 1, 2])
  expect(flattenArrayable([1, [1, [2]]])).toEqual([1, 1, [2]])
})

it('range', () => {
  expect(range(0)).toEqual([])
  expect(range(2)).toMatchSnapshot()
  expect(range(2)).toEqual([0, 1])
  expect(range(2, 5)).toEqual([2, 3, 4])
  expect(range(2, 10, 2)).toEqual([2, 4, 6, 8])
})
