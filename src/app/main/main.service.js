/**
 *  @ngdoc object
 *  @name mainMenuComponent.service:mainMenuService
 *
 *  @description factory to return dom specific instances of a grid
 *
 */
(function() {
  'use strict';

  angular
    .module('mainMenuComponent')
    .service('mainMenuService', mainMenuService);

  /* @ngInject */
  function mainMenuService(Restangular, $q) {
    return {
      getUserModules: getUserModules
    };
    /**
     * @ngdoc method
     * @name getUserModules
     * @methodOf mainMenuComponent.service:mainMenuService
     * @description Get all modules for user based on user id
     * @returns {Promise} contains user's modules
     */
    function getUserModules() {
      var defer = $q.defer();
      var modulesUrl = Restangular.one('/act/modules');
      modulesUrl.get().then(
        function (data) {
          var result = data.data.plain();
          defer.resolve(result.data);
        }, function (error) {
          defer.reject(error.data);
        }
      );
      return defer.promise;
    }
  }

  mainMenuService.$inject = ['Restangular', '$q'];
})();
