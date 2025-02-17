function generateArray(size, min = 0, max = 100) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i), right.slice(j));
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

function measureTime(fn, arr, ...args) {
    const start = performance.now();
    const result = fn(arr, ...args);
    const end = performance.now();
    const time = end - start;
    return { result, time };
}

function main() {
    const size = 100;
    const max = 100;
    const array = generateArray(size, 0, max);

    console.log("Original Array:", array);

    const { result: mergeSorted, time: mergeSortTime } = measureTime(mergeSort, [...array]);
    console.log("Merge Sort:", mergeSorted);
    console.log(`Merge Sort Execution Time: ${mergeSortTime.toFixed(4)} ms`);

    const { result: selectionSorted, time: selectionSortTime } = measureTime(selectionSort, [...array]);
    console.log("Selection Sort:", selectionSorted);
    console.log(`Selection Sort Execution Time: ${selectionSortTime.toFixed(4)} ms`);

    console.log(`Max Value: ${findMax(array)}`);
    console.log(`Min Value: ${findMin(array)}`);
    console.log(`Average Value: ${calculateAverage(array).toFixed(2)}`);

    const target = array[Math.floor(Math.random() * array.length)];
    console.log(`Searching for ${target}...`);

    const linearIndex = linearSearch(array, target);
    console.log(`Linear Search found at index: ${linearIndex}`);

    const binaryIndex = binarySearch(mergeSorted, target);
    console.log(`Binary Search found at index: ${binaryIndex}`);
}

main();