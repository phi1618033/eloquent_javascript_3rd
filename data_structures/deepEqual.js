function deepEqual(a, b) {
    // Checks for types of value
    if (typeof a !== typeof b) {
        return false;
    }
    console.log("type of value checked");

    // Checks for objects
    if (typeof a !== "object") {
        return (a === b);
    }
    console.log("for objects checked");

    const propsA = Object.keys(a);
    const propsB = Object.keys(b);

    // Checks for number of properties
    if (propsA.length != propsB.length) {
        return false;
    }
    console.log("number of properties checked");

    // Checks for same properties names
    const props = propsA.filter((prop) => propsB.indexOf(prop) < 0);
    if (props.length) {
        return false;
    }
    console.log("same properties names checked");

    // Checks for values in properties
    for (let i = 0; i < propsB.length; i++) {

        let x = a[propsA[i]], y = b[propsB[i]];

        if (typeof x === "object" && x !== null) {
            return deepEqual(x, y);
        }

        if (x !== y) {
            return false;
        }
    }

    return true;
}

const A = {
    firstName: "Cheick",
    lastName: "DIALLO",
    height: 175,
    weight: 65
}

const B = {
    firstName: "Cheick",
    lastName: "DIALLO",
    height: 175,
    weight: 65,
    jobTitle: "Enterprise Software Architect"
}

const C = {
    name: "Cheick",
    height: 175,
    brother: {
        name: "Djibril",
        age: 22,
    }
}

const D = {
    name: "Cheick",
    height: 175,
    brother: {
        name: "Hama",
        age: 22,
    }
}

const E = {
    firstName: "Ali",
    height: 175,
    weight: 65
}

const F = {
    firstName: "Ali",
    height: 175,
    weight: 65
}

console.log(deepEqual(C, D));