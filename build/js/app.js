(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgeCalculator = exports.AgeCalculator = function () {
  function AgeCalculator(birthday, age, gender, smoker, exercise) {
    _classCallCheck(this, AgeCalculator);

    this.birthday = birthday;
    this.age = age;
    this.gender = gender;
    this.isSmoker = smoker;
    this.doesExercise = exercise;
  }

  _createClass(AgeCalculator, [{
    key: 'convertAge',
    value: function convertAge() {
      return this.age * 31556952;
    }
  }, {
    key: 'timeDifference',
    value: function timeDifference() {
      var birthday = this.birthday.replace(/\//g, '');
      var year = parseInt(birthday.slice(0, 4));
      var month = parseInt(birthday.slice(4, 6));
      var day = parseInt(birthday.slice(6, 8));
      var date = new Date();
      var yearDif = date.getFullYear() - year;
      var monthDif = date.getMonth() + 1 - month;
      var dayDif = date.getDay() - day;
      var difference = yearDif * 31556952 + monthDif * 2592000 + dayDif * 86400;
      return difference;
    }
  }, {
    key: 'mercuryYears',
    value: function mercuryYears() {
      var age = this.timeDifference();
      return Math.round(age * 0.24 / 31556952);
    }
  }, {
    key: 'venusYears',
    value: function venusYears() {
      var age = this.timeDifference();
      return Math.round(age * 0.62 / 31556952);
    }
  }, {
    key: 'marsYears',
    value: function marsYears() {
      var age = this.timeDifference();
      return Math.round(age * 1.88 / 31556952);
    }
  }, {
    key: 'jupiterYears',
    value: function jupiterYears() {
      var age = this.timeDifference();
      return Math.round(age * 11.86 / 31556952);
    }
  }, {
    key: 'lifeExpectancy',
    value: function lifeExpectancy() {
      var life = void 0;
      if (this.gender === 'female') {
        life = 82;
      } else if (this.gender === 'male') {
        life = 76;
      } else {
        life = 80;
      }
      if (this.isSmoker === true) {
        life -= 10;
      }
      if (this.doesExercise === true) {
        life += 3;
      }
      return life;
    }
  }]);

  return AgeCalculator;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _ageCalculator = require('./../js/ageCalculator.js');

$(document).ready(function () {
  $('form#user-information').submit(function (event) {
    event.preventDefault();
    var birthday = $('input#birthday').val();
    var age = parseInt($('input#age').val());
    var gender = $('input#gender').val();
    var smoker = $('input#smoker');
    var exercise = $('input#exercise');
    var userCalculator = new _ageCalculator.AgeCalculator(birthday, age, gender, smoker, exercise);
    var mercuryYears = userCalculator.mercuryYears();
    var venusYears = userCalculator.venusYears();
    var marsYears = userCalculator.marsYears();
    var jupiterYears = userCalculator.jupiterYears();
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
  });
});

},{"./../js/ageCalculator.js":1}]},{},[2]);
