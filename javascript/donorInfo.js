var Donor = (function(){
	var donorArray = [];

	
	 return {
		    pushJsonObj: function(jsonObj) {
		      donorArray.push(jsonObj);
		    },
		    getJsonObj: function(){
		      // console.log("--" , donorArray[0].name);
		    	return donorArray;
		  	}
	};
	
})();