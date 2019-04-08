function arrayToList(array) {
    const len = array.length;

    if (len < 1) {
        return {};
    }

    let node = {
        value: array[0],
        rest: null
    };

    const list = node;

    for (let i = 1; i < len; i++) {
        let element = {
            value: array[i],
            rest: null
        };

        node.rest = element;
        node = element;
    }

    return list;
}

function listToArray(list) {
    if (list == null || list.value == null) {
        return [];
    }

    let array = [list.value];

    let node = list.rest;
    while (node != null) {
        array.push(node.value);
        node = node.rest;
    }

    return array;
}

function prepend(element, list) {
    let node = {
        value: element,
        rest: list
    };

    return node;
}

function nth(list, n) {
    if (n <= 0) {
        return list == null ? undefined : list.value;
    } else {
        return nth(list.rest, n - 1)
    }
}

let list = arrayToList([3, 5, 8, 10, 12]);
console.log(list);
prepend(15, list);
list = prepend(15, list);
console.log(list);
console.log(nth(list, 0));