$(function (){

	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if(screenWidth < 768){
			$("#collapsable-nav").collapse('hide');

		}
	});
	$("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
(function (global) {

var dc = {};

// var homeHtmlUrl = "snippets/home-snippet.html";
// var allCategoriesUrl =
//   "https://davids-restaurant.herokuapp.com/categories.json";
// var categoriesTitleHtml = "snippets/categories-title-snippet.html";
// var categoryHtml = "snippets/category-snippet.html";
// var menuItemsUrl =
//   "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
// var menuItemsTitleHtml = "snippets/menu-items-title.html";
// var menuItemHtml = "snippets/menu-item.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);

};
})(window);
