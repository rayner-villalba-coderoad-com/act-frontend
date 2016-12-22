/**
 *  @ngdoc object
 *  @name configurations.service:configurationsService
 *
 *  @description factory to return dom specific instances of a grid configuration
 *  and paging configuration
 *
 */
(function() {
  'use strict';

  angular
    .module('configurations')
    .service('configurationService', configurationService);

  function configurationService(Restangular, $q) {
    return {
      getCustomTableConfig: getCustomTableCfg,
      getPagingConfig: getPagingCfg
    };
    /**
     * @ngdoc method
     * @name getCustomTableCfg
     * @param columnsDef
     * @param options
     * @methodOf configurations.service:configurationsService
     * @description Get all grid configuration
     * @returns {Object} custom table
     */
    //TODO remove hardcoded data it should read data
    function getCustomTableCfg (columnsDef, options) {
      return {
        records: [],
        updatedRecords: [],
        columnDefns: columnsDef,
        rowDefns: {
          computedClass: "{ 'is-error': r.isError, 'is-summary': r.isSummary }"
        },
        config: {
          sortBy: '',
          sortDirection: 'asc',
          pageSize: 50,
          pageNumber: 1,
          totalCount: 0,
          totalPages: 0,
          maxSize: 10,
          useRepeat: true,
          showSelectCheckbox: true,
          showSelectAll: true,
          showSort: true,
          clientSort: true,
          clientPaging: true,
          displayPager: true,
          displayPageSize: true,
          stickyHeader: false,
          stickyHeaderOffset: 0,
          stickyContainer: ''
        },
        callbacks: {
          sortHeaderClicked: function (data) {
          },
          pageChanged: function (data) {
          },
          pageSizeChanged: function (data) {
          },
          checkboxClicked: function (data) {
            data.item.isError = data.item.isSelected;
          },
        }
      };
    }

    /**
     * @ngdoc method
     * @name getPagingCfg
     * @methodOf configurations.service:configurationsService
     * @description Get all paging configuration
     * @returns {Object} paging configuration
     */
    //TODO remove hardcoded data it should read data
    function getPagingCfg () {
      return {
        itemsPerPage: 10,
        boundaryLinks: false,
        directionLinks: true,
        firstText: 'First',
        previousText: 'Previous',
        nextText: 'Next',
        lastText: 'Last',
        rotate: true,
        adjacents: 2
      }
    }
  }
})();
