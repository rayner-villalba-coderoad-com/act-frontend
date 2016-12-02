(function() {
  'use strict';

  angular
    .module('app.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $log, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      console.log('error');
      event.preventDefault();
      $state.go('error');
    });
    $log.debug('runBlock end');
  }

})();
