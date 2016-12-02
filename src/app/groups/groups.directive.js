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
      console.log(this);
      this.stateParams = $stateParams;
    }

    GroupsController.prototype = {
      $onInit: function() {
        console.log(this.stateParams);
        this.groupsTitle = 'Groups';
      }
    };
})();
