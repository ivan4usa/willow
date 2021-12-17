function activeMenu() {
	window.onload = function(){
		try {
			var links = document.getElementById('navbars').getElementsByTagName('a');
			var url = document.location.href;
			for (var i = 0; i < links.length; i++) {
				if (url == links[i].href) {
					links[i].className += ' menu-link_active';
				};
			};
		} catch(e) {};
	};
}
