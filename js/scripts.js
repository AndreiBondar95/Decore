jQuery("document").ready(function($){
 
	var nav = $('.nav-container');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 80) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
});

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function () {
	header.classList.toggle("menu-open");
};