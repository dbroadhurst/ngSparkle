(function() {
  'use strict';

  angular.module('sparkle.loadanim', [])
    .directive('sparkleLoadAnim', init);

  function init($timeout) {
    var directive = {
      restrict: 'A',
      scope: {
        image: '@',
        show: '@'
      },
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      var image;

      image = new Image();
      image.src = scope.image;
      image.addEventListener('load', function() {
        element[0].classList.add(scope.show);

        if (element[0].tagName === 'IMG') {
          element[0].src = this.src;
        } else {
          element.css({
            'background-image': 'url(' + this.src + ')'
          });
        }
      }, false);
    }
  }

  init.$inject = ["$timeout"];

}());
