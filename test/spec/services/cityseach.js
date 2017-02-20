'use strict';

describe('Service: cityseach', function () {

  // load the service's module
  beforeEach(module('watsangularAppApp'));

  // instantiate service
  var cityseach;
  beforeEach(inject(function (_cityseach_) {
    cityseach = _cityseach_;
  }));

  it('should do something', function () {
    expect(!!cityseach).toBe(true);
  });

});
