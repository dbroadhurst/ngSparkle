(function() {

  'use strict';

  angular.module('ngApp', [
    // 'templates-app',
    // 'templates-common',
    // 'editor.home',
    // 'ui.router',
    // 'sparkle.typing',
    'sparkle.loadanim',
    // 'sparkle.flip'
  ])

  .controller('app', init);

  function init($scope) {
    console.log('start');
  }

}());
