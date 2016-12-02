(function() {
  'use strict';

  angular
    .module('app.core')
    .constant("ACT_API_ENDPOINT", "http://localhost:8888")
    .constant('moment', moment);
})();
