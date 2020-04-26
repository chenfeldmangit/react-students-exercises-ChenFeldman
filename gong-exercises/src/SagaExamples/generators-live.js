// Non blocking when suspended
const generatorFunction = function* () {
    var i = 0;
    while (true) {
        yield i++;
    }
};
 
const iterator = generatorFunction();
 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Recieve value from iterator
const generatorFunction = function* () {
    console.log(yield);
};
 
const iterator = generatorFunction();
 
iterator.next('foo');
iterator.next('bar');

// Delegate to another generator
function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  var gen = generator(10);
  
  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 11
  console.log(gen.next().value); // 12
  console.log(gen.next().value); // 13
  console.log(gen.next().value); // 20
