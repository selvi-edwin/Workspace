'use strict';

describe('Controller: ReglistCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var ReglistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReglistCtrl = $controller('ReglistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
