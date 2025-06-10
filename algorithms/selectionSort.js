function selectionSort(array) {

    let min = 0;

    for (let i = 0; i < array.length - 1; ++i) {
        min = i;
        for (let j = i + 1; j < array.length; ++j) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        [array[i], array[min]] = [array[min], array[i]];
    }

    return array;
}


module.exports = selectionSort;