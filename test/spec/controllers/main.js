'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('gameApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should increase scope.count when add method was called', function () {
    scope.add();
    expect(scope.count).toEqual(1);
  });
});
