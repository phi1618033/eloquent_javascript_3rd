let min = (a, b) => {
    if (a === b || a < b) {
        return a;
    } else {
        return b;
    }
};

console.log(min(35, 35));