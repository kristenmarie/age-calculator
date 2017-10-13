export class AgeCalculator{

  constructor(age){
    this.age = age;
  }

  convertAge(){
    return (this.age * 31556952)
  }
}
