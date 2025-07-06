const insertionSort = require('../algorithms/insertionSort');

test('sorts numbers correctly', () => {
  expect(insertionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
});

const array = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

console.time('Insertion Sort');
insertionSort(array);
console.timeEnd('Insertion Sort');
