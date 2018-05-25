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
    let diff=Math.abs((this.date1-this.date2)/1000)
    console.log("The difference in seconds between the two dates is: "+diff+ " seconds.")
    return "The difference in seconds between the two dates is: "+diff+ " seconds.";

  }
}
