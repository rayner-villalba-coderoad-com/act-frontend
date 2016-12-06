(function() {
  'use strict';

  angular
    .module('groupsComponent')
    .component('groups', {
      templateUrl: 'app/groups/groups.html',
      controller: GroupsController
    });

    GroupsController.$inject = ['$stateParams'];
    function GroupsController ($stateParams) {
      this.stateParams = $stateParams;
    }

    GroupsController.prototype = {
      $onInit: function() {
        this.groupsTitle = 'Groups';
      }
    };
})();
