(function () {
    'use strict';

    angular.module('omnimusic.omni-player').directive('omniPlayer', function() {
        return {
            restrict : 'E',
            templateUrl : 'assets/app/omni-player/omni-player.html'
        };
    });
}());