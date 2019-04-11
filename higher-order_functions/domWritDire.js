const SCRIPTS = require('./scripts.js');

function characterWritingDirection(charCode) {
    for (const script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script.direction;
        }
    }
    return undefined;
}

function countBy(chars, writingDirection) {
    let counts = [];
    for (const char of chars) {
        let direction = writingDirection(char);
        let known = counts.filter((c) => c.direction == direction);
        if (known == -1) {
            counts.push({direction, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

// function dominantWritingDirection()