let slides = document.querySelectorAll('.slide');

let slideActivate = function (e) {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});
	e.target.classList.add('active');
};

slides.forEach((slide) => {
	slide.addEventListener('click', slideActivate);
});
