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

  calculateYearsLeft(earthAge, mercuryAge, venusAge, marsAge, jupiterAge){
    //worldwide Earth life expectancy as of 2015
    const averageLifeExpectancy=70.5;
    let output="";
    let earthExpectancy=(averageLifeExpectancy-earthAge);
    console.log(earthExpectancy);
    if (earthExpectancy>0){
      output+="You have "+earthExpectancy+" years left on Earth. ";
    } else {
      output+="You have lived on Earth "+Math.abs(earthExpectancy)+" years longer than expected. ";
    }

    let mercuryExpectancy=(averageLifeExpectancy-mercuryAge);
    console.log(mercuryExpectancy);
    if (mercuryExpectancy>0){
      output+="You have "+mercuryExpectancy+" years left on Mercury. ";
    } else {
      output+="You have lived on Mercury "+Math.abs(mercuryExpectancy)+" years longer than expected. ";
    }

    let venusExpectancy=(averageLifeExpectancy-venusAge);
    console.log(venusExpectancy);
    if (venusExpectancy>0){
      output+="You have "+venusExpectancy+" years left on Venus. ";
    } else {
      output+="You have lived on Venus "+Math.abs(venusExpectancy)+" years longer than expected. ";
    }

    let marsExpectancy=(averageLifeExpectancy-marsAge);
    console.log(marsExpectancy);
    if (marsExpectancy>0){
      output+="You have "+marsExpectancy+" years left on Mars. ";
    } else {
      output+="You have lived on Mars "+Math.abs(marsExpectancy)+" years longer than expected. ";
    }

    let jupiterExpectancy=(averageLifeExpectancy-jupiterAge);
    console.log(jupiterExpectancy);
    if (jupiterExpectancy>0){
      output+="You have "+jupiterExpectancy+" years left on Jupiter. ";
    } else {
      output+="You have lived on Jupiter "+Math.abs(jupiterExpectancy)+" years longer than expected. ";
    }

    console.log(output);
    return output;

  }

}
