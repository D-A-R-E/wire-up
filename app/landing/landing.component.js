(function () {
	'use strict';

	angular
		.module('dare')
        .component('landing', {
            templateUrl: '/app/landing/landing.template.html'
        })

})();

function getInfo(){
    var url = "https://bo.reddit.com/r/showerthoughts.json"
    var title = []
    $.get(url)
      .then(function(data) {
        title.push(data.data.children.data.title)
				console.log(title)
				updatePage(title)
      })
}
			function updatePage(title){
			  $(".showerthought-container").append("<h4>" + title + "</h4>")
			    }

				getInfo()
