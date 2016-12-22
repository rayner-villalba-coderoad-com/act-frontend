(function() {
  'use strict';

  angular
    .module('usersComponent')
    .component('users', {
      templateUrl: 'app/users/users.html',
      controller: UsersController
    });

  UsersController.$inject = ['usersService', 'configurationService', '$state'];
  function UsersController (usersService, configurationService, $state) {
    this.usersService = usersService;
    this.configurationService = configurationService;
    this.state = $state;
  }

  UsersController.prototype = {
    $onInit: function() {
       var self = this;
       this.usersTitle = 'Users';


      this.getTableCfg();
      this.getUsers();
      this.branches = this.loadBranches();

    },

    getUsers: function() {
      var results = [];
      var self = this;
      this.usersService.getUsers().then(function(data) {
        results = data.reduce(function(prevVal, currentVal) {
          prevVal.push(currentVal);
          return prevVal;
        }, []);
        //Load data to User's table
        self.loadDataToUsers(results);
      });

    },

    getColumnsDefinitions: function () {
      var columnsDef = [
        { name: 'USERNAME', value: 'username', binding: "username", isSorted: true, style: {}, isWatched: true, isAnchor: false , srefBinding: 'main.users.detail'},
        { name: 'LAST NAME', value: 'lastName', binding: 'lastName', isSorted: false, isWatched: true, style: {}, isAnchor: false, srefBinding: 'main.users.detail' },
        { name: 'FIRST NAME', value: 'firstName', binding: 'firstName', isSorted: true, isWatched: true, style: {},isAnchor: false, srefBinding: 'main.users.detail' },
        { name: 'COMPANY', value: 'company', binding: 'company', isSorted: false,isWatched: true, style: {}, isAnchor: false, srefBinding: 'main.users.detail' },
        { name: 'FACILITY', value: 'facility', binding: 'facility',isSorted: true, style: {}, isAnchor: false, srefBinding: 'main.users.detail' },
        { name: 'ROLES', value: 'roles', binding: 'roles', isSorted: true, isWatched: true, style: {}, isAnchor: false, srefBinding: 'main.users.detail' }
      ];
      return columnsDef;
    },

    getTableCfg: function() {
      var self = this;
      var columnDefs = this.getColumnsDefinitions();

      //Get default configuration based on configuration service
      var tableConfiguration = this.configurationService.getCustomTableConfig(columnDefs);

      this.table1Options = tableConfiguration;

      this.table1Options.rowDefns = {
        computedClass: "{ 'is-error': r.isError, 'is-summary': r.isSummary }"
      };

      //Grid Actions
      this.table1Options.callbacks = {
        rowClicked: function (user) {
          console.log(user);

          //Redirects to another view
          self.state.go('main.users.detail', {
            //TODO define selected row
            userId: user.selectedRow.id
          });
        }
      };
    },

    loadDataToUsers: function (records) {
      this.table1Options.records = records;
    },

    search: function(user) {
      console.log(user);
    },

    //TODO remove this function due to branches are hardcoded
    loadBranches: function () {
      return [{
        id: 1,
        company: 'ACT',
        facility: 'act'
      }, {
        id: 2,
        company: 'Mojix',
        facility: 'mojix'
      }, {
        id: 3,
        company: 'Coderoad',
        facility: 'coderoad'
      }, {
        id: 4,
        company: 'Tierconnect',
        facility: 'tierconnect'
      }];
    }
  };
})();
