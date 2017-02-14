(function(global){

	var ajaxUtils ={};

	//returns an HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest){
			return(new XMLHttpRequest());
		}
		else if (window.ActiveXObject){
			return( new AtiveXOject("Microsoft.XMLHTTP"));
		}
		else{
			global.alert("Ajax is not supprted!");
			return(null);

		}
	}
	//Makes an Ajax Get request to 'requestURL'
	ajaxUtils.getSendRequest =
		function handleResponse(requestUrl, responseHandler, isJasonResponse){
			if((request.readyState ==4) && (request.status ==200)) {
				if(isJasonResponse == undefined){
					isJasonResponse = true;
				}
				if(isJasonResponse){
					responseHandler(JSON.parse(request.responseText));
				}
				else{
					responseHandler(request.responseText);
				}
			}
		}

		global.$ajaxUtils = ajaxUtils;
})(window);