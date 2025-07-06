function quickSort(array, start = 0, end = array.length - 1) {

    if (start >= end) return;

    const pivot = array[end];
    let next = start;

    for (let i = start; i < end; ++i) {
        if (array[i] < pivot) {
            [array[i], array[next]] = [array[next], array[i]];
            ++next;
        }
    }

    [array[end], array[next]] = [array[next], array[end]];

    quickSort(array,start, next - 1);
    quickSort(array,next + 1, end);

    return array;

}

module.exports = quickSort;
