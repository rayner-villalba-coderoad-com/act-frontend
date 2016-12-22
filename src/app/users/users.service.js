/**
 * @ngdoc object
 * @name usersComponent.service:usersService
 *
 * @description factory that returns users information
 */
(function() {
  'use strict';

  angular
    .module('usersComponent')
    .service('usersService', usersService);

  /* @ngInject */
  function usersService(Restangular, $q) {
    return {
      getUsers: getUsers
    };

    /**
     * @ngdoc method
     * @name getUsers
     * @methodOf usersComponent.service:usersService
     * @description Get all users
     * @returns {Promise} contains users' information
     */
    function getUsers() {
      var defer = $q.defer();
      var usersUrl = Restangular.one('/act/users');
      usersUrl.get().then(
        function(data) {
          var result = data.data.plain();
          defer.resolve(result.users);
        }, function (error) {
          defer.reject(error.data);
        }
      );
      return defer.promise;
    }


    /**
     * @ngdoc method
     * @name getUsers
     * @methodOf usersComponent.service:usersService
     * @description Get all users
     * @returns {Promise} contains users' information
     */
    function getUsersList() {
      var defer = $q.defer();
      var usersUrl = Restangular.one('/users');
      usersUrl.get().then(
        function(data) { console.log(data);
          var result = data.data.plain();
          defer.resolve(result);
        }, function (error) {
          defer.reject(error.data);
        }
      );
      return defer.promise;
    }
  }
})();
