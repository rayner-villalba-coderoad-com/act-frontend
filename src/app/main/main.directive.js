(function() {
  'use strict';

  angular
    .module('mainMenuComponent')
    .component('mainMenu', {
      templateUrl: 'app/main/main.html',
      controller: MainMenuController
    });

    MainMenuController.$inject = ['mainMenuService'];

    /* @ngInject */
    function MainMenuController(mainMenuService) {
      var self = this;
      this.mainMenuService = mainMenuService;
      this.mainMenuService.getUserModules().then(function(data) {
        self.modules = data;
      });
    }

    MainMenuController.prototype = {
      $onInit: function() {

      },

      setModuleSections: function(sections) {
        console.log(sections);
        this.sections = sections;
      }
    };



})();
