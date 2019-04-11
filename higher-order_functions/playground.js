const SCRIPTS = require('./scripts.js');

//#region Composers

function filter(list, condition) {
    let passed = [];
    list.forEach(element => {
        if (condition(element)) {
            passed.push(element);
        }
    });
    return passed;
}

function map(list, transform) {
    let result = [];
    list.forEach(element => {
        result.push(transform(element));
    });
    return result;
}

function reduce(list, operation, startingValue) {
    let result = startingValue;
    list.forEach((element) => {
        result = operation(result, element.year);
    });
    return result;
}

//#endregion

function characterScript(code) {
    for (const script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return undefined;
}

function countBy(items, groupName) {
    let counts = [];
    for (const item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({ name }) => name != "none");

    let total = scripts.reduce((n, { count }) => n + count, 0);
    if (total == 0) {
        return "No scripts found";
    }

    console.log(scripts.reduce((list, { name, count }) => list + name + ":" + count + ", ", ""));
    console.log(`Total: ${total}`);

    return scripts.map(({ name, count }) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));