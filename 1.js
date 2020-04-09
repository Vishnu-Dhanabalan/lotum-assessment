// We will check if the current number is divisible by 3, 5 or both and print the desired
// value.
// Time complexity: O(1) (because we are counting only to 100)
// NOTE: We use process.stdout.write instead of console.log to match the question's
// asked format.
const printFooBar = () => {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      process.stdout.write(" FooBar ");
    } else if (i % 3 === 0) {
      process.stdout.write(" Foo ");
    } else if (i % 5 === 0) {
      process.stdout.write(" Bar ");
    } else {
      process.stdout.write(` ${i} `);
    }
  }
};

printFooBar();
