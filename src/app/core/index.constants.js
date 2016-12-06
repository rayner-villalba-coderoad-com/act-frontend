(function() {
  'use strict';

  angular
    .module('app.core')
    .constant("ACT_API_ENDPOINT", "http://localhost:9999")
    .constant('moment', moment);
})();
