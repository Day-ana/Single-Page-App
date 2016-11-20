(function () {

	var categories = {
		categories: ["Football", "Baseball", "Basketball", "Soccer", "Billiards", "Quidditch"],
		pages: ["Dolphins", "Warriors", "Raiders", "Giants", "49ers", "Seahawks"]
	}
		
		//render side Menus
		for(key in categories){
				renderList(key, categories[key]);
		}

		var nav = document.querySelectorAll(".nav-item");
		var content = document.querySelectorAll("section");
		var cat = document.querySelectorAll(".cat-item");
		var catTitle = document.getElementById('cat-heading');
		var title = document.getElementById('heading');
		var sectionTitle = document.getElementById('section-heading');

		function init(ev){

			for(var i = 0; i < nav.length; i++){
				if(document.addEventListener){
					nav[i].addEventListener('click', function(ev){
						updateContent(ev, ev.target.className);
					});
				}
			};
		};

		function updateContent(ev, name){

			resetContent();

			//Stripping off nav-item Class and On class before updating section ID	
			var section = name.replace("nav-item ", "").replace(" on", "");
			title.innerHTML = section;
			
			//Updating active class to section
			document.getElementById(section).className = "active";
			
			//Set on class to triggered event
			ev.currentTarget.classList.add('on');

		};
		function resetContent(){

				//Removing active class from Sections
				for(var i =0; i < content.length; i++){

					content[i].classList.remove('active');
				}
				//Removing on class for nav list
				for(var i =0; i < nav.length; i++){

					nav[i].classList.remove('on');
				}
				//Remove on from cat list
				for(var i =0; i < cat.length; i++){

					cat[i].classList.remove('on');
				}
		}
		function renderList(key, list){
			var node = document.getElementById(key);
			for(var i = 0;i < list.length; i++){
				var listNode = node.appendChild(document.createElement("li"));
				listNode.className = "cat-item";
				listNode.appendChild(document.createTextNode(list[i]));
				listNode.addEventListener('click', function(ev){
					
					//make compatible for both webkit and FF
					var ev = ev.target || ev.srcElement;
					updateList(ev);

				}, false);
			}

		};
		function updateList(ev){
			resetContent();
			
			title.innerHTML = ev.parentNode.getAttribute('id');

			document.getElementById(ev.className).className = "active";
			ev.classList.add('on');

			catTitle.innerHTML = ev.innerHTML;
		}

	init();


})();