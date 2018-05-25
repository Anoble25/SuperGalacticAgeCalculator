import { ageCalculator } from './../src/agecalculator.js';

describe('ageCalculator', function() {


  it('take a person’s age in years and convert it into seconds.', function() {
    let firstTest = new ageCalculator(20);
    console.log(firstTest.calculateAgeInSeconds());
    expect(firstTest.calculateAgeInSeconds()).toEqual("Your age in seconds is: "+630720000+" seconds.");
    //expect(num.toEqual(0);
  });

  it('will take two dates calculate the difference in seconds between the two.', function() {
    let currentTime=new Date();
    let date1=new Date(1987, 6, 14);
    let date2=new Date(1987, 6, 15);
    console.log(currentTime.getUTCFullYear());
    console.log(date1.getUTCFullYear());
    //let time=Date.Now();
    let secondTest = new ageCalculator(0, date1, date2);


    expect(secondTest.calculateDiffOfDates()).toEqual("The difference in seconds between the two dates is: "+86400+" seconds.");
    //console.log(secondTest.calculateAgeInSeconds());

    //expect(num.toEqual(0);
  });

  it('take a person’s age in Earth years and convert it to Mercury years', function() {
    let thirdTest = new ageCalculator(30);
    expect(thirdTest.calculateAgeInMercuryYears()).toEqual("Your age in Mercury years is: "+125+" years.");
    //expect(num.toEqual(0);
  });

});
