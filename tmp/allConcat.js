import {AgeCalculator} from './../js/ageCalculator.js';

$(document).ready(function(){
  $('form#user-information').submit(function(event){
    event.preventDefault();
    let birthday = $('input#birthday').val();
    let age = parseInt($('input#birthday').val());
    let gender = $('input#gender').val();
    let smoker = $('input#smoker');
    let exercise = $('input#exercise');
    let userCalculator = new AgeCalculator(birthday, age, gender, smoker, exercise);
    let mercuryYears = userCalculator.mercuryYears();
    let venusYears = userCalculator.venusYears();
    let marsYears = userCalculator.marsYears();
    let jupiterYears = userCalculator.jupiterYears();
    $('.form-container').hide();
    $('.result').show();
  });
});
