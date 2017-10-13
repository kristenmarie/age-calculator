import {AgeCalculator} from './../js/ageCalculator.js';

describe('AgeCalculator', function(){
  let testCalculator;
  beforeEach(function(){
    testCalculator = new AgeCalculator('1989/05/29', 28);
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

});
