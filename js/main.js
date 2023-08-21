// Анимация шапки сайта
var uiElement = document.getElementById("ui");
var text = uiElement.innerHTML;

if (uiElement) {
	uiElement.innerHTML = ''
	for (var i = 0; i < 40; i++) {
		var textElement = document.createElement("div");
		textElement.classList.add("text");
		textElement.textContent = text;
		uiElement.appendChild(textElement);
	}
}

// Swiper

new Swiper('.top-slider', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 5000,
	},
});

// Button get social
const button = document.querySelector('.footer-news__button');
const list = document.querySelector('.footer__list')
if (button) {
	button.addEventListener('click', () => { list.classList.toggle('active') })
}

// Link
const items = [...document.querySelectorAll('.top__link-item')];
const topBody = document.querySelector('.top__body')
const topWithout = document.querySelector('.item-without')
const topWith = document.querySelector('.item-with')

if (topWithout) {
	topWithout.addEventListener('click', () => {
		topBody.classList.add('without');
		topBody.classList.remove('with');
	})
}

if (topWith) {
	topWith.addEventListener('click', () => {
		topBody.classList.add('with');
		topBody.classList.remove('without');
	})
}

if (items) {
	items.forEach(item => {
		item.addEventListener('click', () => {
			if (document.querySelector('.top__link-item.active')) {
				document.querySelector('.top__link-item.active').classList.remove('active');
				item.classList.add('active');
			}
			item.classList.add('active');
		})
	})
}

// =================

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;

			let animItemPoint = window.innerHeight - animItemHeight;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight;
			}

			if ((scrollY > animItemOffset - animItemPoint) && animItemOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			}
			else {
				animItem.classList.remove('active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}