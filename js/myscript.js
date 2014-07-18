  (function() {
		addEventListener('polymer-ready', function() {
		
		var items = [];

		$.getJSON("js/metadata.json", function(json) {
			for(var i=0, j = 1; i<json.cams.length; i++, j++)
				items.push([json.cams[i].url, "images/shelflist-small/raf" + j + ".png"]);
		});

		
	  	CoreStyle.g.items = items;
		  addEventListener('template-bound', function(e) {
		    e.target.g = CoreStyle.g;
		    e.target.items = items;
		  });
		});

	  })();
