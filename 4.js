// Simplest one is to return an array of set initialized with the given input.
// Time complexity: O(N)
// Space complexity: O(N) -> Since this is not an inplace solution.
const removeDuplicatesUsingSet = input => {
    return [...new Set(input)]
}

// We can use reduce function. We will sort it 
// (so that the duplicates comes next to each other)
// And then use reducer function with output initialized to []. 
// Then we will compare each input element with each output element 
// and if they don't match (not a duplicate), we will push it to output.
const removeDuplicatesUsingReduce = input => {
    return input.sort(function (a, b) {
            return a > b;
        })
        .reduce(function (output, each) {
            if (output.slice(-1)[0] !== each) output.push(each);
            return output;
        }, []);
}

const input = ['one', 'one', 'two', 'three', 'three', 'two']
console.log(removeDuplicatesUsingSet(input))
console.log(removeDuplicatesUsingReduce(input))