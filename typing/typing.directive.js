(function() {
  'use strict';

  angular.module('sparkle.typing', [])
    .directive('sparkleTyping', init);

  function init($timeout) {
    var directive = {
      scope: {
        speed: '@speed',
        delaySpeed: '@delaySpeed',
        repeat: '@repeat',
        message: '@message'
      },
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {

      var text = scope.message,
        end = 0,
        backspace = 0,
        fontSize = getComputedStyle(element[0])['font-size'],
        cursor = angular.element('<div></div>'),
        speed = scope.speed || 100,
        delaySpeed = scope.delaySpeed || 2000,
        repeat = scope.repeat || false;

      cursor.addClass('sparkle-typing-cursor');
      cursor[0].style.width = fontSize;
      cursor[0].style.height = fontSize;

      element.addClass('typing');

      $timeout(function type() {
        var delay = speed,
          command;

        if (end < text.length) {
          if (backspace) {
            delay = speed * 4;
            backspace--;
            end--;
          } else if (text[end] === '\\') {
            if (text.slice(end, end + 6) === '\\pause') {
              text = text.slice(0, end) + text.slice(end + 6, text.length);
              delay = delaySpeed;
            } else if (text.slice(end, end + 4) === '\\cls') {
              text = text.slice(end + 4, text.length);
              end = 1;
            } else if (text.slice(end, end + 10) === '\\backspace') {
              command = text.slice(end, text.length)
                .split(')')[0];
              backspace = command.split('(')[1];
              text = text.slice(0, end) + text.slice(end + command.length + 1, text.length);
            }
          } else {
            end++;
          }

          element.text(text.slice(0, end));
          element.append(cursor);
        } else {
          if (repeat) {
            text = scope.message;
            end = 0;
          }
        }

        $timeout(type, delay);
      }, 100);

    }
  }

}());
