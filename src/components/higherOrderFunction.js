const wrapperFunctoin = (func) => {
  // This function gets the 'addOne' function
  return (num) => {
    return func(num) * 2; // passing the 'num to 'addOne' function, so that the anonymous function can get 'num' as parameter
  };
};

const addOne = (num) => {
  return num + 1;
};

const addOneAndDouble = wrapperFunctoin(addOne); // wrapper function returns a function which takes num parameter
console.log(addOneAndDouble(2));

// Outer function er maddhome inner function er behaviour kichuta update korte pari, in a non destructive way.
//  addOne functionta jamon ache tamon e thake, just jokhon tar sathe extra kono behaviour add kora lage, tokhon
// wrapper functoin diye addOne ke wrap kore deya hoy. That is the main idea of a higher order function, which takes
// a function as an input and return another function.
