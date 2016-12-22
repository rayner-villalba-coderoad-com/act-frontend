(function() {
  'use strict';

  angular
    .module('usersComponent')
    .component('user', {
      templateUrl: 'app/users/user.html',
      controller: UserController
    });

  UserController.inject = ['$stateParams'];

  function UserController($stateParams) {
    console.log('Test User Controller');
    this.stateParams = $stateParams;
  }

  UserController.prototype = {
    $onInit: function() {
      console.log(this.stateParams);
    }
  };
})();
