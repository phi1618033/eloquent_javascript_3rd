const SCRIPTS = require('./scripts.js');

const TEXT = 'Al Jazeera, est une chaîne de télévision\nتفيد التقارير بأن قادة الجيش السوداني يعكفون منذ فجر اليوم';

function writingDirection(char) {
    for (const script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return char.codePointAt(0) >= from && char.codePointAt(0) < to;
        })) {
            return script.direction;
        }
    }
    return undefined;
}

function countBy(chars, groupDirection) {
    let counts = [];
    for (const char of chars) {
        let direction = groupDirection(char);
        let known = counts.findIndex((c) => c.direction == direction);
        if (known == -1) {
            counts.push({ direction, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function dominantWritingDirection(text) {
    let directions = countBy(text, (char) => writingDirection(char)).filter(({ direction }) => direction != undefined);

    let dominantDirection = directions.reduce((dominant, direction) => {
        return direction.count > dominant.count ? direction : dominant;
    });

    return dominantDirection;
}

console.log(dominantWritingDirection(TEXT));