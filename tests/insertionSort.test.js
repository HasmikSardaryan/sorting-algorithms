const insertionSort = require('../algorithms/insertionSort');

describe('insertionSort', () => {
  test('sorts an unsorted array of numbers', () => {
    expect(insertionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });

  test('sorts an already sorted array', () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts a reverse-sorted array', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles an array with duplicates', () => {
    expect(insertionSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test('handles an array with all identical elements', () => {
    expect(insertionSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  test('handles an empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  test('handles a single-element array', () => {
    expect(insertionSort([42])).toEqual([42]);
  });

  test('sorts array with negative numbers', () => {
    expect(insertionSort([0, -1, -5, 3, 2])).toEqual([-5, -1, 0, 2, 3]);
  });

  test('sorts array with floating point numbers', () => {
    expect(insertionSort([1.1, 3.3, 0.5, 2.2])).toEqual([0.5, 1.1, 2.2, 3.3]);
  });

  test('does not modify the original array reference', () => {
    const arr = [4, 2, 5];
    const sorted = insertionSort([...arr]);
    expect(arr).toEqual([4, 2, 5]); 
    expect(sorted).toEqual([2, 4, 5]); 
  });
});
