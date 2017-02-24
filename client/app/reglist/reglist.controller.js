'use strict';

angular.module('demoApp')
  .controller('ReglistCtrl',['$scope','reglistService',
  function ($scope,reglistService) {
      var call_back =function(data){
           $scope.allRegUsers = data;
        //   console.log("Registered users reglist controller :" + JSON.stringify($scope.allRegUsers));
      }
      reglistService.showApiCall(call_back);
  }]);


















/*
(function() {
    console.log(" Show registered user controller");
    
    var ReglistCtrl = function($scope,showmemberService) { 
     // var name = $stateParams.name;
     
    var call_back =function(data){
       //   console.log("ReglistCtrl " + data);
           $scope.allRegUsers = data ;
            console.log("Registered users list in reglist controller :" + $scope.allRegUsers);
    }
    showmemberService.showApiCall(call_back);
 //   console.log("in memnber function");
   };
     console.log("in memnber show inject");
     ReglistCtrl.$inject =['$scope','showmemberService'];

    angular.module('demoApp').controller('ReglistCtrl', ReglistCtrl);
}());

*/