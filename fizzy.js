/**
 *?? print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 *
 * **/

let fizzy = (length = 101) => {
  const buzzArray = [];
  for (let i = 1; i < length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      buzzArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      buzzArray.push("Fizz");
    } else if (i % 5 === 0) {
      buzzArray.push("Buzz");
    } else {
      buzzArray.push(i.toString());
    }
  }
  return buzzArray;
};

console.table(fizzy(101));
