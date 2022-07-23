function analyzeArray(arr) {
    const avgResult = findAvg(arr);
    const minResult = findMin(arr);
    const maxResult = findMax(arr);
    const lengthResult = findLength(arr);
    
    const analysisObj = {
        average: avgResult,
        min: minResult,
        max: maxResult,
        length: lengthResult
    }

    return analysisObj;
}

function findAvg(arr) {
    let sum = 0;
    sum = arr.reduce((prev, curr) => prev + curr, sum);
    const length = findLength(arr);
    return sum / length;
}

function findMin(arr) {
    const min = Math.min(...arr);
    return min;
}

function findMax(arr) {
    const max = Math.max(...arr);
    return max;
}

function findLength(arr) {
    return arr.length;
}
module.exports = analyzeArray;