function quickSort(nums) {
    if (nums.length <= 1) return nums;
    let pivotIndex = Math.floor(Math.random() * nums.length);
    let pivot = nums[pivotIndex]

    const left = [];
    const right = [];


    for (let i = 0; i < nums.length; ++i) {
        if (i === pivotIndex) continue; 
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;
