import {AgeCalculator} from './../js/ageCalculator.js';

$(document).ready(function(){
  $('form#user-information').submit(function(event){
    event.preventDefault();
    let birthday = $('input#birthday').val();
    let age = parseInt($('input#age').val());
    let gender = $('input#gender').val();
    let smoker = $('input#smoker');
    let exercise = $('input#exercise');
    let userCalculator = new AgeCalculator(birthday, age, gender, smoker, exercise);
    let mercuryYears = userCalculator.mercuryYears();
    let venusYears = userCalculator.venusYears();
    let marsYears = userCalculator.marsYears();
    let jupiterYears = userCalculator.jupiterYears();
    $('.form-container').hide();
    $('#user-age').text(age);
    $('#earth-span').text(userCalculator.lifeExpectancy() - age);
    $('#mercury-age').text(mercuryYears);
    $('#mercury-span').text(userCalculator.lifeExpectancy() - mercuryYears);
    $('#venus-age').text(venusYears);
    $('#venus-span').text(userCalculator.lifeExpectancy() - venusYears);
    $('#mars-age').text(marsYears);
    $('#mars-span').text(userCalculator.lifeExpectancy() - marsYears);
    $('#jupiter-age').text(jupiterYears);
    $('#jupiter-span').text(userCalculator.lifeExpectancy() - jupiterYears);
    $('.result').show();
    if (age > userCalculator.lifeExpectancy()) {
      $('.long-life').show();
    }
  });
});
