//Challlenge

let numbers= [12, 18, 11, 5, 8, 2];

function Middle(numbers) {
    const middle = numbers.length >> 1;
    return numbers.length & 1
        ? numbers[middle]
        : numbers.slice(middle - 1, middle + 1);
}

console.log(Middle(numbers));