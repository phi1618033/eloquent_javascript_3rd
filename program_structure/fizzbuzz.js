for (let i = 1; i < 101; i++) {
    let value = i;
    value = (i % 3 === 0) ? "Fizz" : value;
    value = (i % 5 === 0) ? "Buzz" : value;
    value = ((i % 3 === 0) && (i % 5 === 0)) ? "FizzBuzz" : value;
    console.log(value);
}