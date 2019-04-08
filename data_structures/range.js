function range(start, end, step = 1) {
    let range = [];

    if (step > 0) {
        for (let index = start; index <= end; index += step) {
            range.push(index);
        }
    } else {
        for (let index = end; index >= start; index -= (-step)) {
            range.push(index);
        }
    }

    return range;
}

function sum(range) {
    let sum = 0;
    for (const num of range) {
        sum += num;
    }
    return sum;
}

console.log(range(1, 10, -2));