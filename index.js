function foo() {
  return 'bar';
}

const foo = function() {
  return 'bar';
}
const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2, 3); //=> 5

const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
}
sum(1, 2); //=> 3

const nums = [1,2,3];
const squares = nums.map(x => x ** 2); 
squares; //=> [1,4,9]
nums; //=> [1,2,3]