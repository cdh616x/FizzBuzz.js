const myList = [];
var count = 1;

function fizzBuzz() {
    if ((count % 3 === 0) && (count % 5 === 0)) {
        myList.push("FizzBuzz")
    }
    else if (count % 5 === 0) {
        myList.push("Buzz")
    }
    else if (count % 3 === 0) {
        myList.push("Fizz");
    } else {
        myList.push(count);
        }

    count++;
    console.log(myList);
}
