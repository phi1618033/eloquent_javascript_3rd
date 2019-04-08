function reverseArray(inverse) {
    if (inverse.length < 2) {
        return inverse;
    }

    let reverse = [];
    for (let index = inverse.length - 1; index > -1; index--) {
        reverse.push(inverse[index]);
    }

    return reverse;
}

function reverseArrayInPlace(inverse) {
    const len = inverse.length;

    if (len < 2) {
        return inverse;
    }

    const inversionLength = (len % 2 === 0) ? inverse.length / 2 : Math.floor(inverse.length / 2);

    for (let i = 0, j = len - 1; i < inversionLength; i++ , j--) {
        const temp = inverse[i];
        inverse[i] = inverse[j];
        inverse[j] = temp;
    }

    return inverse;
}

console.log(reverseArrayInPlace([1, 5, 9, 10, 12, 30]));