var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/page1",{
    templateUrl:"templates/page1.html"

  }).when("/page2",{
    templateUrl:"templates/page2.html"

  }).when("/nameList",{
	  	controller:"tableController",
	  	templateUrl:"templates/list.html"
	  });


});

app.controller("tableController",function($scope,$http){
		$http.get("http://localhost:3050/").then(function(response){
				$scope.data=response.data;
				console.log(response.data);
			})

	});
