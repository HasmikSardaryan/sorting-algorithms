function bubbleSort(array) {

    // for early exit
    let swapCount = 0;

    for (let i = 0; i < array.length; ++i) {
        swapCount = 0;
        for (let j = 0; j < array.length - 1 - i; ++j) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                ++swapCount;
            }
        }
        if (swapCount == 0) {
            break;
        }
    }

    return array;

}

module.exports = bubbleSort;