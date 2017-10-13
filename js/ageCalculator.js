
export class AgeCalculator{

  constructor(birthday, age){
    this.birthday = birthday;
    this.age = age;
  }

  convertAge(){
    return(this.age * 31556952);
  }

  timeDifference(){
    let birthday = this.birthday.replace(/\//g, '');
    let year = parseInt(birthday.slice(0,4));
    let month = parseInt(birthday.slice(4,6));
    let day = parseInt(birthday.slice(6,8));
    let date = new Date();
    let yearDif = date.getFullYear() - year;
    let monthDif = (date.getMonth() + 1) - month;
    let dayDif = (date.getDay()) - day;
    let difference = (yearDif * 31556952) + (monthDif * 2592000) + (dayDif * 86400);
    return difference;
  }

  mercuryYears(){
    let age = this.timeDifference();
    return Math.round((age * 0.24) / 31556952);
  }

  venusYears(){
    let age = this.timeDifference();
    return Math.round((age * 0.62)/ 31556952);
  }

  marsYears(){
    let age = this.timeDifference();
    return Math.round((age * 1.88)/ 31556952);
  }

}
