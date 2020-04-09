const evenIntegers = (n) => {
    let counter = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            counter++;
        }
    }
    return counter;
}

const N = 5;
console.log(`Number of even numbers in ${N} is ${evenIntegers(N)}`)