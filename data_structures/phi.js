let logs = require('./journal');

function phi(data) {
    let dividend = (data[3] * data[0]) - (data[2] * data[1]);
    let divisor = Math.sqrt((data[2] + data[3]) * (data[1] + data[3]) * (data[0] + data[1]) * (data[0] + data[2]));
    return dividend / divisor;
}

function dataSetFor(event, journal) {
    let set = [0, 0, 0, 0];
    for (let entry of journal) {
        let index = 0;
        if (entry.events.includes(event)) {
            index += 1;
        }
        if (entry.squirrel) {
            index += 2;
        }
        set[index] += 1;
    }
    return set;
}

function events(journal) {
    let list = [];
    for (const entry of journal) {
        for (const event of entry.events) {
            if (!list.includes(event)) {
                list.push(event);
            }
        }
    }
    return list;
}

console.log(events(logs.JOURNAL));