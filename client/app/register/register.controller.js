'use strict';

angular.module('demoApp')
  .controller('RegisterCtrl', ['$scope', '$http',
  function ($scope,$http) {
    var user = {};
    

    console.log("IN controller Register contorller");

    var callback =function(status){
        $scope.status = status;
        console.log("status " + $scope.status);            
    }

    $scope.reset = function() {
      $scope.userForm.$setPristine();
      //$scope.user={};
    }

    $scope.register = function(){
      user = $scope.user;
      $http({
			url: '/api/signups/',
 			method: 'POST',
    		headers: { 'Content-Type': 'application/json' },
    		data: {user}
		})
			.then (function(response) {
				result = response;
			//	console.log("result" + JSON.stringify(response) + "Status : " +status);
				callback(response.status);
			}, function(error){
				alert("Error");
				return result;
			})
         //registerService.postApiCall($scope.user,callback);
    }
  }]);











  

/*
(function() {
    

    var RegisterCtrl = function($scope, registerService) {  

         var callback =function(status){
           $scope.status = status;
            //console.log("signup status  :" + JSON.stringify(response));
            console.log("status " + status);
       //  callbackServerSUCCESS();
            
        }

        function callbackServerSUCCESS() {
         $scope.$apply(function() {
                    $state.go('admin');
         });
        }
         $scope.reset = function() {
           // $scope.addemp = {};
            $scope.userForm.$setPristine();
        }
         $scope.register = function(){
       // console.log("Register Controller" + $scope.user.name + $scope.user.email);
        console.log("Register Controller" + JSON.stringify($scope.user));
         registerService.postApiCall($scope.user,callback);
   }
  
   
 //   registerService.postApiCall(callback);

          

};
     console.log("in memnber inject");
     RegisterCtrl.$inject =['$scope','registerService'];

    angular.module('demoApp').controller('RegisterCtrl', RegisterCtrl);
}()); */