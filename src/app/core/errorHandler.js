(function() {
  'use strict';

  angular.module('app.core')
    .factory('ErrorHandler', ['$rootScope', 'CORE_API_ENDPOINT',

      function ($rootScope, CORE_API_ENDPOINT) {

        var isFromInterACT = function (url) {
          return url.startsWith(CORE_API_ENDPOINT);
        };

        return {
          throw: function ($state, response, deferred, responseHandler, $q) {
            if (typeof(response.config) !== 'undefined') {
              if (!isFromInterACT(response.config.url)) {
                return false
              }
            } else {
              return false;
            }


            var error = {
              time: new Date(),
              state: {
                name: $state.current.name,
                url: $state.current.url
              },
              request: {
                method: response.config.method,
                params: response.config.params,
                headers: response.config.headers,
                url: response.config.url,
                data: response.config.data || 'no data'
              }
            };

            switch (true) {
              case response.status === 403:
                return $q.reject();
                break;
              case response.status === 404:
                console.log('need to show error 404');
                break;
              case response.status >= 500:
                if (navigator.onLine) {
                  $rootScope.$broadcast('error', error);
                  console.warn(error);
                }
                break;
            }
          }
        }
      }]);

})();
