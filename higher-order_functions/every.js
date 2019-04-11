
function every(arr, predicate) {
    let flag = true;
    arr.forEach(e => {
        flag = flag && predicate(e);
    });
    return flag;
}

function everyWithSome(arr, predicate) {
    return !arr.some(e => !predicate(e));
}

const odd = [3, 5, 7, 9, 11];
const even = [2, 4, 6, 8, 10];
const mix = even.concat(odd).sort();

const checkEven = (n) => n % 2 == 0;

console.log(everyWithSome(even, checkEven));
