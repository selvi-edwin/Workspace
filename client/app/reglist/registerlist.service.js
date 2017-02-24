angular.module('demoApp').service('reglistService',['$http','base_url',
	function($http,base_url) {
		var result;
		var self =this;
		self.showApiCall = function (callback){
		$http.get(base_url + '/api/signups/')
			.then(function(data, status) {
				result = (data);
				//console.log("result" + JSON.stringify(result));
				callback(data);
			}, function(error){
				alert("Error");
				return result;
			})
			//console.log("result" + JSON.stringify(result));
		}
	}
]);






















/*

(function() {

var showmemberService = function($http) {
var result;

	this.showApiCall = function (callback){
	console.log("in registered user list service" + name);
	$http.get('/api/signups/')
		.success(function(data, status) {
			result = (data);
			console.log("result" + JSON.stringify(result));
			callback(data);
		//	return result;
			//console.log("result" + JSON.stringify(result));
		})
		.error(function (){
			alert("Error");
			return result;
		});
		console.log("result" + JSON.stringify(result));
	};
}
    angular.module('demoApp').service('showmemberService', showmemberService);
}());*/