export class ageCalculator{
  constructor(age=0, date1=0, date2=0){
    this.age=age;
    this.date1=date1;
    this.date2=date2;
  }


  //Takes a person's age and converts it to seconds
  calculateAgeInSeconds(){
    return "Your age in seconds is: "+this.age*365*24*60*60+" seconds.";
  }

  //Take two dates and determine the difference, in seconds, between the two.
  calculateDiffOfDates(){
    let diff=Math.abs((this.date1-this.date2)/1000);
    console.log("The difference in seconds between the two dates is: "+diff+ " seconds.");
    return "The difference in seconds between the two dates is: "+diff+ " seconds.";

  }

  calculateAgeInMercuryYears(){
    let mercuryAge=this.age/.24;
    console.log("Your age in Mercury years is: "+mercuryAge+" years.");
    return mercuryAge;
  }

  calculateAgeInVenusYears(){
    let venusAge=this.age/.62;
    console.log("Your age in Venus years is: "+venusAge+" years.");
    return venusAge;
  }

  calculateAgeInMarsYears(){
    let marsAge=this.age/1.88;
    console.log("Your age in Mars years is: "+marsAge+" years.");
    return marsAge;
  }

  calculateAgeInJupiterYears(){
    let jupiterAge=this.age/11.86;
    console.log("Your age in Jupiter years is: "+jupiterAge+" years.");
    return jupiterAge;
  }

  calculateYearsLeft(){
    
  }

}
