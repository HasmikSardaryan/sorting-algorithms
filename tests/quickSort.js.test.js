const quickSort = require('../algorithms/quickSort');

describe('quickSort', () => {
  test('sorts small array of numbers correctly', () => {
    expect(quickSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
    expect(quickSort([10, -1, 2, 5, 0])).toEqual([-1, 0, 2, 5, 10]);
    expect(quickSort([1.2, 3.5, -0.5, 2.2])).toEqual([-0.5, 1.2, 2.2, 3.5]);
  });

  test('handles empty array', () => {
    expect(quickSort([])).toEqual([]);
  });

  test('handles single element array', () => {
    expect(quickSort([42])).toEqual([42]);
  });

  test('handles all elements the same', () => {
    expect(quickSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  test('sorts already sorted array', () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts reverse sorted array', () => {
    expect(quickSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
  });

  test('sorts with negative numbers', () => {
    expect(quickSort([-5, -1, -3, 0, 2])).toEqual([-5, -3, -1, 0, 2]);
  });

  test('performance on large array (10,000 elements)', () => {
    const array = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    const expected = [...array].sort((a, b) => a - b);

    console.time('Quick Sort');
    const result = quickSort(array);
    console.timeEnd('Quick Sort');

    expect(result).toEqual(expected);
  });
});
