(function() {
  'use strict';

  angular
    .module('app.navbar')
    .component('navBar', {
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      bindings: {
        sections: '<'
      }
    });
    NavbarController.$inject= ['$state'];
    //Constructor
    function NavbarController($state) {
      this.state = $state;
    }

    NavbarController.prototype = {
      $onInit: function() {},

      $onChanges: function(changes) {
        console.log(changes);
        //Check it has section has at least one section for the current select item
        if(changes.sections.currentValue) {
          //Select at least one section
          var selectedSection = changes.sections.currentValue[1];

          //Check if selectedSection is not undefined
          if(selectedSection) {
            this.getOptions(selectedSection.options);
            //Select at one option from the section
            var selectedOption = selectedSection.options[1];
            this.renderOption(selectedOption);
          }
        }
      },
      getOptions: function(options) {
         console.log(options);
        this.options = options;
      },
      renderOption: function(option) {
        var path = 'main.' + option.name;
        var label = option.label;
        console.log(label);
        this.state.go(path, {label: label});
      }
     };

})();
