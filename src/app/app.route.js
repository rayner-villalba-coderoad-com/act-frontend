(function() {
  'use strict';

  angular
    .module('act')
    .config(routerConfig);

  /*/!** @ngInject *!/*/
  function routerConfig($stateProvider, $urlRouterProvider) {
    var states = [
      { name: 'error',
        url: '/404',
        templateUrl: 'app/core/404.html'
      },
      {
        name: 'main',
        url: '/',
        template: '<main-menu></main-menu>'
      }, {
        name: 'main.groups',
        url:'groups',
        template: '<groups></groups>'
      }, {
        name: 'main.users',
        url:'users',
        template: '<users></users>'
      }, {
        name: 'main.users.detail',
        url: '/:userId',
        template: '<user></user>',
        resolve: {
          user: function ($stateParams) {
            console.log($stateParams);
          }
        }
      }

    ];

    states.forEach(function(state) {
      $stateProvider.state(state);
    });
    // the known route, with missing '/' - let's create alias
    //$urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
  }
})();
