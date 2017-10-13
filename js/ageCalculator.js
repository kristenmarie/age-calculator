
export class AgeCalculator{

  constructor(birthday, age, gender, smoker){
    this.birthday = birthday;
    this.age = age;
    this.gender = gender;
    this.isSmoker = true;
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

  jupiterYears() {
    let age = this.timeDifference();
    return Math.round((age * 11.86)/ 31556952);
  }

  lifeExpectancy() {
    let life;
    if (this.gender === 'female') {
      life =  82;
    }else if (this.gender === 'male') {
      life = 76;
    } else {
      life = 80;
    }
    if (this.isSmoker === true) {
      life -= 10;
    }
    return life;
  }

}
