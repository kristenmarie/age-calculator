import {AgeCalculator} from './../js/ageCalculator.js';

describe('AgeCalculator', function(){
  let testCalculator;
  beforeEach(function(){
    testCalculator = new AgeCalculator(28);
  });

  it('will convert an age from years to seconds', function(){
    expect(testCalculator.convertAge()).toEqual(883594656);
  });

  it('will take two dates and determine the difference between the two in seconds', function(){

  });
});
