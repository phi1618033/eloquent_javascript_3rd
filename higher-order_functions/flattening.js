let twoDim = [
    [3, 5],
    [8, 10, "DIALLO"],
    ["Cheick", "Ali", "M", 1358]
];

function flatten(twoDimArr) {
    return twoDimArr.reduce((flattened, arr) => flattened.concat(arr));
}

console.log(flatten(twoDim));