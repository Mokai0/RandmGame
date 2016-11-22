$("#ajaxToARandomServer").click(function() {
			var rootUrl = 'mongodb://localhost/fighter-scores';
			$.ajax({
			 method: "GET",
			 url: rootUrl + '/posts/1',
			})
			 .then(function( theReturnData) {
			 	console.log(theReturnData);
			   $("#responseData").text(JSON.stringify(theReturnData));
			 });
		});
