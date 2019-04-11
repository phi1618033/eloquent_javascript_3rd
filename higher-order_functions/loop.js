

function loop(value, test, update, body) {
    if (!test(value)) {
        return;
    }

    body(value);

    return loop(update(value), test, update, body);
}

loop(0, n => n < 10, n => n = n + 1, n => console.log(n));