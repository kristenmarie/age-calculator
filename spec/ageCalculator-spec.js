import {AgeCalculator} from './../js/ageCalculator.js';

describe('AgeCalculator', function(){
  let testCalculator;
  beforeEach(function(){
    testCalculator = new AgeCalculator('1989/05/29', 28, 'female');
  });


  it('will take two dates and determine the difference between the two in seconds', function(){
    expect(testCalculator.timeDifference()).toEqual(894481056);
  });

  it('will convert an age from years to seconds', function(){
    expect(testCalculator.convertAge()).toEqual(883594656);
  });

  it('will return age in mercury years', function(){
    expect(testCalculator.mercuryYears()).toEqual(7);
  });

  it('will return age in Venus years', function(){
    expect(testCalculator.venusYears()).toEqual(18);
  });

  it('will return age in Mars years', function(){
    expect(testCalculator.marsYears()).toEqual(53);
  });

  it('will return age in Jupiter years', function() {
    expect(testCalculator.jupiterYears()).toEqual(336);
  });

  it('will return life expectancy of user based on gender', function(){
    expect(testCalculator.lifeExpectancy()).toEqual(82);
  });

});
