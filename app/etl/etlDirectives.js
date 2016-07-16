'use strict';

angular.module('myApp.etl').directive('onReadFile', function($parse) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);

            element.on('change', function(onChangeEvent) {
                var reader = new FileReader();

                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {
                            $fileContent: onLoadEvent.target.result
                        });
                    });
                };

                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    };
}).directive("mydirect",function(){
	return {
		restrict : 'E',
		scope:{myname:'='},
		link:function(scope,el,attrs){
		console.log("inside link ");
		scope.$watchCollection('myname',function(newValue,oldValue){
					ReactDOM.render(React.createElement(MYREACTCOMP,{myname:newValue}),el[0]);
		});
		}
		
	};
	});