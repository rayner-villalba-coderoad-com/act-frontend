(function() {
  'use strict';

  angular
    .module('app.sidebar')
    .component('sideBar', {
      templateUrl:'app/components/sidebar/sidebar.html',
      controller: SideBarController,
      bindings: {
        modules: '<',
        onSelect: '&'
      }
    });

    //SideBarController.$inject = [];

    //Constructor
    function SideBarController() {

    }

    SideBarController.prototype = {
      $onInit: function() {},

      $onChanges: function(changes) {
        //Check if the list has at least one item
        if (changes.modules.currentValue) {
          //Select the administration item from the side bar
          var selectedModule = changes.modules.currentValue[1];
          this.autoModuleSelect(selectedModule);
        }
      },

      autoModuleSelect: function(selectedItem) {
        this.setSections(selectedItem);
      },

      setSections: function(module) {
        //Fired an event
        this.onSelect({sections: module.sections});
      }



    };
})();
