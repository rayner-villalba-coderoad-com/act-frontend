(function() {
  'use strict';

  angular
    .module('app.core')
    .config(config);

  /** @ngInject */
  function config($logProvider, RestangularProvider, toastrConfig, ACT_API_ENDPOINT) {
    // Enable log
    $logProvider.debugEnabled(true);

    RestangularProvider.setBaseUrl(ACT_API_ENDPOINT);
    RestangularProvider.setFullResponse(true);

    RestangularProvider.setRequestInterceptor(function (elem) {
      return elem;
    });

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
