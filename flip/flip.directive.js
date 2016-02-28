(function() {

  'use strict';

  angular.module('sparkle.flip', [])
    .directive('sparkleFlip', init);

  function init($timeout) {

    var directive = {
      scope: {
        direction: '@'
      },
      template: '<div class="flipper" style="width: 256px; height: 256px" ng-transclude></div>',
      restrict: 'E',
      link: link,
      transclude: true
    };

    return directive;

    function link(scope, element, attrs) {
      var flipElement = angular.element(element[0].querySelector('.flipper'));

      $timeout(function timer() {
        if (scope.direction === 'x') {
          angular.element(flipElement).toggleClass('flipX');
        } else if (scope.direction === 'y') {
          angular.element(flipElement).toggleClass('flipY');
        }

        $timeout(timer, 2000);
      }, 2000);
    }
  }

}());
