exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(inputNumber) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    
    const outputNumber = (typeof inputNumber === 'number') ? inputNumber : false;

    const isFizz = (inputNumber % 3 === 0);
    const isBuzz = (inputNumber % 5 === 0);

    let outputString = '';
    if (isFizz) outputString += 'fizz';
    if (isBuzz) outputString += 'buzz';

    return isFizz || isBuzz ? outputString : outputNumber;
  }
};

