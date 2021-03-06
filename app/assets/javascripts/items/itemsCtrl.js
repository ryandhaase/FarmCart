angular.module('farmCart')
.controller('itemsCtrl', [
  '$scope',
  'items',
  '$stateParams',
  function($scope, items, $stateParams) {
    $scope.booth = items;
    var currentId = $stateParams.id;
    $scope.creativefile = {};

    $scope.upload_file = function() {
      // copy the filename/type

      $scope.filename = $scope.creativefile.filename;

      // copy the base64 string from the file
      $scope.base64 = $scope.creativefile.base64;
    };

    $scope.addItem = function() {
      items.addItem(
        currentId,
        data = {
        name: $scope.name,
        description: $scope.description,
        price: $scope.price,
        image: 'data:' + $scope.filename + ';base64,' + $scope.base64,
      });
    };

    // $scope.showItem = function() {
    //   debugger;
    //   items.showItem(currentId, item);
    // };
  },
]);
