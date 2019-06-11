function checkTrueRandomness(upper_bound) {
    const numbers = [];

    for (let i = 0; i < upper_bound; i++) {
        const generated = Math.floor(Math.random() * upper_bound);
        if (numbers.includes(generated)) {
            console.log(`True randomness failed on after ${i + 1} tries`);
            break;
        }
        numbers.push(generated);
    }
}

checkTrueRandomness(999999999);