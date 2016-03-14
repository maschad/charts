'use strict';

describe('Controller: ScatterCtrl', function () {

  // load the controller's module
  beforeEach(module('chartsApp'));

  var ScatterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScatterCtrl = $controller('ScatterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScatterCtrl.awesomeThings.length).toBe(3);
  });
});
