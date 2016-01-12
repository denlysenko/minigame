'use strict';

/**
 * @ngdoc function
 * @name gameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameApp
 */
angular.module('gameApp')
  .controller('MainCtrl', ['$scope', '$interval', 'Util',function ($scope, $interval, Util) {
   	var timerId, duration;
   	$scope.count = 0;
   	$scope.isEnded = false;
   	$scope.isStart = true;
   	$scope.timer = Util.ms(0);
   	$scope.game = {};

   	function updateTime() {
    	var diff = Math.floor((duration.getTime() - new Date().getTime())/1000);
    	if(diff === 0) {
    		$interval.cancel(timerId);
    		timerId = null;
    		$scope.onEnd();
    	}
      return $scope.timer = Util.ms(diff);
    }

   	$scope.add = function() {
   		$scope.count++;
   	};

   	$scope.start = function() {
   		$scope.count = 0;
   		$scope.isEnded = false;
   		$scope.isStart = false;
  		duration = new Date(Date.now() + $scope.game.duration*1000);
    	timerId = $interval(updateTime, 1000);
      updateTime();
    };

    $scope.$on('destroy', function() {
    	$interval.cancel(timerId);
    });

   	$scope.onEnd = function() {
   		$scope.isEnded = true;
   	};

   	$scope.playAgain = function() {
   		$scope.count = 0;
	   	$scope.isEnded = false;
	   	$scope.isStart = true;
	   	$scope.timer = Util.ms(0);
	   	$scope.game = {};
   	};

  }]);
