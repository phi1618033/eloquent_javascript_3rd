let board = "", blank = true;
let size = 10;
for (let i = 1; i < (Math.pow(size, 2) + 1); i++) {
    board = blank ? board + "_" : board + "#";
    if (i % size === 0) {
        board = board + "\n";
    } else {
        blank = !blank;
    }
}
console.log(board);