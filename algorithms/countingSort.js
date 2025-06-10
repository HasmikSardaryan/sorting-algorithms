function countingSort(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; ++i) {
        max = Math.max(max, arr[i])
        min = Math.min(min, arr[i]);
    }

    let freq = Array(max - min + 1).fill(0);
    let bias = 0 - min;

    let retArr = Array(arr.length);

    for (let i = 0; i < arr.length; ++i) {
        freq[arr[i] + bias]++;
    }

    let pref = Array(max - min + 1).fill(0);

    pref[0] = freq[0];

    for (let i = 1; i < freq.length; ++i) {
        pref[i] = pref[i - 1] + freq[i];
    }

    let ind = arr.length - 1;

    for (let i = arr.length - 1; i >= 0; --i) {
        let j = pref[arr[i] + bias] - 1;
        retArr[j] = arr[i];
        --pref[arr[i] + bias];
    }
    return retArr;
}


module.exports = countingSort;