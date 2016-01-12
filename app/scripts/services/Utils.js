(function() {
	'use strict';

	angular.module('gameApp')
			.factory('Util', [function () {
            return {
                ms: function (t) {
                    var minutes, seconds;
                  	minutes = Math.floor(t / 60) % 60;
                  	if(minutes < 10) minutes = '0' + minutes;
                    t -= minutes * 60;
                    seconds = t % 60;
                    if(seconds < 10) seconds = '0' + seconds;
                    return [
                        minutes,
                        seconds
                    ].join(':');
                }
            };
        }]);
})();