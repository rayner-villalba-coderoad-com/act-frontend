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

    function getUserModules() {
      var defer = $q.defer();
      var modulesUrl = Restangular.one('/data');
      modulesUrl.get().then(
        function (data) {
          var result = data.data.plain();
          defer.resolve(result);
        }, function (error) {
          defer.reject(error.data);
        }
      );
      return defer.promise;
    }
  }

  mainMenuService.$inject = ['Restangular', '$q'];
})();
