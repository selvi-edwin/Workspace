
angular.module('demoApp').service('registerService',['$http','base_url',
	function($http,base_url) {
		var result;
		var self =this;
		self.postApiCall = function (user,callback){
		console.log("in registerService" + user);
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
		} 
	}]);

























	/*	$http({
			url: '/api/signups/',
 			method: 'POST',
    		headers: { 'Content-Type': 'application/json' },
    		data: {user}
		})
		
		.success(function(response,status) {
			result = response;
			console.log("result" + JSON.stringify(response) + "Status : " +status);
			callback(status);			
		})
		.error(function (){
			alert("Error");
			return result;
		});
		console.log("result" + JSON.stringify(result));


	}
);

var registerService = function($http) {


this.postApiCall = function (user,callback){
	console.log("in registerService");
	$http({
		url: '/api/signups/',
 		method: 'POST',
    	headers: { 'Content-Type': 'application/json' },
    	data: {user}
	})
		.success(function(response,status) {
			result = response;
			console.log("result" + JSON.stringify(response) + "Status : " +status);
			callback(status);			
		})
		.error(function (){
			alert("Error");
			return result;
		});
		console.log("result" + JSON.stringify(result));
	
	};		
}
    
}());*/
