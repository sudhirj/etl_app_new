'use strict';

angular.module('myApp.etl').service('FnCSVToArrayCon', function () {
    this.FnCSVToArrayCon = function (strData, strDelimiter) { 
	
	// checking delimeter 
            strDelimiter = (strDelimiter || ",");
            // Create  regular expression
            var objPattern = new RegExp(
                (
                    // Delimiters.
                    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
                    // Quoted fields.
                    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
                    // Standard fields.
                    "([^\"\\" + strDelimiter + "\\r\\n]*))"
                ),
                "gi"
            );
            // array to hold the data
            var arrData = [
                []
            ];
         
            var arrMatches = null;
            while (arrMatches = objPattern.exec(strData)) {
                // Get  delimiter
                var strMatchedDelimiter = arrMatches[1];
                if (
                    strMatchedDelimiter.length &&
                    (strMatchedDelimiter != strDelimiter)
                ) {
                    arrData.push([]);
                }
                if (arrMatches[2]) {
                    var strMatchedValue = arrMatches[2].replace(
                        new RegExp("\"\"", "g"),
                        "\""
                    );
                } else {
                    var strMatchedValue = arrMatches[3];
                }
                arrData[arrData.length - 1].push(strMatchedValue);
            }
            // Return  data.
            return (arrData);
	
	};

});