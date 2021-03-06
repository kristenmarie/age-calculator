# Super Galactic Age Calculator
![image](https://user-images.githubusercontent.com/15882954/31570246-b4747eec-b036-11e7-9b25-22d94737ba60.jpg)

#### An application that determines a user’s age based on a planet’s solar years, 10.13.2017

#### By Kristen Marie Kulha

## Description

This application allows the user to enter their birth year and then displays the users age in Earth years, Mercury years, Venus years, Mars years and Jupiter years as well as how many years of life the user has left on each planet.

##Specifications

* Take a users age and convert it into seconds.
  * Expected input: 1
  * Expected output: 31,556,952
* Takes two dates and determines the difference, in seconds, between the two.
  * Expected input: 10.12.2017 & 10.13.2017
  * Expected output: 86,400
* Return age in Mercury years(.24 Earth years)  
  * Expected input: 28
  * Expected output: 7
* Return age in Venus years(.62 Earth years)
  * Expected input: 28
  * Expected output: 18
* Return age in Mars years
  * Expected input: 28
  * Expected output: 53
* Return age in Jupiter years
  * Expected input: 28
  * Expected output: 336
* Return life expectancy of user based on gender
  * Expected input: 'female'
  * Expected output: 82
* Decrease life expectancy if user is a smoker.
  * Expected input: 'female', true
  * Expected output: 72
* Increase life expectancy if user exercises
  * Expected input: 'female', true, true
  * Expected output: 75
* Return years of life left on Mercury
  * Expected input:
  * Expected output:
* Return years of life left on Venus
  * Expected input:
  * Expected output:
* Return years of life left on Mars
  * Expected input:
  * Expected output:
*  Return years of life left on Jupiter
  * Expected input:
  * Expected output:
* Will account for user age that has surpassed average life expectancy.
  * Expected input:
  * Expected output:

## Setup/Installation Requirements

* Clone this repository
* In terminal, navigate to this projects root directory (age-calculator)
* In terminal, enter the following commands:
  * ``` $ npm install ```
  * ``` $ bower install ```
  * ``` $ gulp build ```
  * ``` $ gulp serve ```

## 🐛Known Bugs🐛

There are no known bugs at this time.

## Future functionality

Reconfigure a bit so when the users age surpasses their estimated life expectancy it reconfigures their time remaining on all the different planets.

## 📧Support and contact details📧

Feel free to contact me at kristen.m.kulha@gmail.com

## Technologies Used

_JavaScript, HTML, CSS, Node, Gulp, Jasmine, Karma_

### License

This software is licensed under the MIT license.
Copyright (c) 2017 **_Kristen Marie Kulha_**
