'use strict';

angular.module('myApp.etl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/etl', {
        templateUrl: 'etl/index.html',
        controller: 'etlController'
    });
}])

.controller('etlController', function($scope,FnCSVToArrayCon) {
    $scope.customer = {};
    $scope.customer.header = [];
    $scope.customer.content = [];
    $scope.customer.data = [];
    $scope.headerMap = {};
	$scope.errorDisplay=false;
	$scope.showRecords=false;
	$scope.showInstructions=false;
	
	//define function to upload csv file, this is called while clicking upload button
    $scope.upload = function() {
	
		var affectedRowCount=0;
		$scope.errorDisplay=false;
		//console.log("content ",$scope.customer.content);
		//console.log("header ",$scope.headerMap);
        angular.forEach($scope.customer.content, function(valueObj, keyObj) {
            var tempObj = {};
            angular.forEach(valueObj, function(value, key) {
                tempObj[$scope.headerMap[key]] = value;

            });
			if(Object.keys(tempObj).length===Object.keys($scope.headerMap).length){
				$scope.customer.data.unshift(tempObj); 
				affectedRowCount++;
			}
			
           	//console.log("data ",$scope.customer.data);
        });
		if(affectedRowCount==0){
			$scope.errorDisplay=true;
		}
		else{
			$scope.customer.content = [];	
			$scope.headerMap={};
		}
       // console.log(" values customer ", $scope.customer.data);
	   
	   $scope.showRecords=!$scope.showRecords;
	   console.log("show record "+$scope.showRecords);
    }
	
	$scope.showInst=function(){
	$scope.showInstructions=!$scope.showInstructions;
	console.log("test "+$scope.showInstructions);	
}
	//this showcontent function is called on selecting the file
    $scope.showContent = function($fileContent, $type) {
        if ($type == "map") {
            $scope.headerMap = {};
            $scope.customer.header = FnCSVToArrayCon.FnCSVToArrayCon($fileContent);
            for (var i = 0; i < $scope.customer.header[0].length; i++) {
                $scope.headerMap[$scope.customer.header[1][i]] = $scope.customer.header[0][i];
            }
            //console.log("mapped ", $scope.headerMap);

        } else if ($type == "data") {
          //  console.log("csv toarray data ", FnCSVToArrayCon($fileContent));
            $scope.dataContent = FnCSVToArrayCon.FnCSVToArrayCon($fileContent);
            for (var i = 1; i < $scope.dataContent.length; i++) {
                $scope.tempObj = {};
                for (var j = 0; j < $scope.dataContent[i].length; j++) {
                  //  console.log("map map "+$scope.dataContent[0][j]+" and "+$scope.dataContent[i][j]);
                    $scope.tempObj[$scope.dataContent[0][j]] = $scope.dataContent[i][j];
                }
                $scope.customer.content.unshift($scope.tempObj);
            }
            //console.log("csv data arry after ", $scope.customer.content);

        }



		



    };

});