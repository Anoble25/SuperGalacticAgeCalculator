import { ageCalculator } from './../src/agecalculator.js';

describe('AgeTests', function() {

  it('take a person’s age in years and convert it into seconds.', function() {
    var firstProb = new ageCalculator(20);
    expect(firstProb.calculateAgeInSeconds.toEqual(0);
  });

  // it('get a number and return all of the even valued terms for the Fibonacci sequence up to the inputted number', function(){
  //   var secondProb = new Problem();
  //   expect(secondProb.problem2(10)).toEqual(44);
  // });
});
