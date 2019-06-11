const countChar = (word, char) => {
    let count = 0;
    for (let index = 0; index < word.length; index++) {
        const c = word[index];
        if (c === char) {
            count++;
        }
    }
    return count;
}

const countBs = function (word) {
    return countChar(word, "B");
}

console.log(countChar("kakkerlak", "k"));