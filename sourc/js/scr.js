$(document).ready(function () {
	// Бургер-меню
	$('.header_burger').click(function () {
		$('.header_burger, .header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// Плавный скролл по ссылкам меню
	$('.menu_list-link').click(function (e) {
		e.preventDefault();
		let targetId = $(this).attr('href');
		setTimeout(function () {
			$('.header_burger, .header_menu').removeClass('active');
			$('body').removeClass('lock');

			let offsetTop = $(targetId).offset().top;
			$('html, body').animate({
				scrollTop: offsetTop
			}, 500);
		}, 100);
	});

	// 🔁 ТабЫ
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
		});
	});
});
//////////////////////////////////////
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
 ///////////////////////////////////
 document.getElementById('130').addEventListener('click', function() {
	document.querySelector('.contact-form').scrollIntoView({
		behavior:"smooth", block:"start",
	});
 });
 document.getElementById('131').addEventListener('click', function() {
	document.querySelector('.footer').scrollIntoView({
		behavior:"smooth", block:"start",
	});
 });
 document.getElementById('10').addEventListener('click', function() {
	document.querySelector('.about_us').scrollIntoView({
		block: "nearest",behavior:"smooth", block:"start"
	});
 });
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

///////////////////////////////////////////////////////

