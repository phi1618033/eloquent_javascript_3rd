let stats = [
    [76, 9],
    [4, 1]
];

let phi = ((stats[1][1] * stats[0][0]) - (stats[1][0] * stats[0][1])) / (Math.sqrt(340000));

console.log(phi);
