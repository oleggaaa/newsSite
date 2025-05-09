$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
	});
});
const swiper = new Swiper(".swiper", {
	effect: "fade",
	autoplay: {
	  delay: 3350,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
 });
 document.getElementById('10').addEventListener('click', function() {
	document.querySelector('.why_are_we').scrollIntoView({
		block: "nearest",behavior:"smooth", block:"start"
	});
 });

 const tabsBtn = document.querySelectorAll(".tabs_nav-btn");
 const tabsItems = document.querySelectorAll(".tabs_item");
 
 tabsBtn.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);
		
		tabsBtn.forEach(function(item) {
			item.classList.remove('active');
		});
		
		tabsItems.forEach(function(item) {
			item.classList.remove('active');
		});
		currentBtn.classList.add('active');
		currentTab.classList.add('active');
	})
 })

 document.getElementById('11').addEventListener('click', function() {
	document.querySelector('.catalog').scrollIntoView({
		block: "start",behavior:"smooth",
	});
 });
 document.getElementById('12').addEventListener('click', function() {
	document.querySelector('.catalog').scrollIntoView({
		behavior:"smooth", block:"start",
	});
 });