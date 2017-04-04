$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {

var dc = {};

var homeHtml = "snippets/snippet-home.html";
var aboutHtml = "snippets/snippet-about.html";
var contactUsHtml = "snippets/snippet-contactUs.html";
var practiceHtml = "snippets/snippet-practice.html";
var customersHtml = "snippets/snippet-customers.html";
var activityHtml = "snippets/snippet-activity.html";

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
var hideMe = function (selector){
	var html = document.querySelector("#p_1");
	html.classList.add("hide-me");
	insertHtml(selector)
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-insertHtml");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-insertHtml")
      .innerHTML = responseText;
  },
  false);

dc.loadAboutHtml = function(){
	showLoading("#main-insertHtml");
$ajaxUtils.sendGetRequest(
  aboutHtml,
  function (responseText) {
    document.querySelector("#main-insertHtml")
      .innerHTML = responseText;
  },
  false);
};

dc.loadContactUsHtml = function(){
	hideMe("#main-insertHtml");
	showLoading("#main-insertHtml");

$ajaxUtils.sendGetRequest(
  contactUsHtml,
  function (responseText) {
    document.querySelector("#main-insertHtml")
      .innerHTML = responseText;

  },
  false);
};
dc.loadActivityHtml = function(){

	showLoading("#main-insertHtml");
$ajaxUtils.sendGetRequest(
  activityHtml,
  function (responseText) {
    document.querySelector("#main-insertHtml")
      .innerHTML = responseText;
  },
  false);
};
dc.loadCustomersHtml = function(){
	showLoading("#main-insertHtml");
$ajaxUtils.sendGetRequest(
  customersHtml,
  function (responseText) {
    document.querySelector("#main-insertHtml")
      .innerHTML = responseText;
  },
  false);
};
dc.loadPracticeHtml = function(){
	showLoading("#main-insertHtml");
$ajaxUtils.sendGetRequest(
  practiceHtml,
  function (responseText) {
    document.querySelector("#main-insertHtml")
      .innerHTML = responseText;
  },
  false);
};

});


global.$dc = dc;

})(window);
