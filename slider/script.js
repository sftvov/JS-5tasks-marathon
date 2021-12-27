const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesArr = sidebar.querySelectorAll('div');
const slidesCount = slidesArr.length;
const maxIndex = slidesCount - 1;

let ActiveSlideIndex = 0;

for (let i = maxIndex; i >= 0; i--) {
	sidebar.appendChild(slidesArr[i]);
}

sidebar.style.top = -`${maxIndex}` * 100 + 'vh';

setTimeout(() => {
	sidebar.style.transition = 'top 0.5s ease-in-out';
}, 0);

upBtn.addEventListener('click', () => {
	changeSlide('up');
});
downBtn.addEventListener('click', () => {
	changeSlide('down');
});

function changeSlide(direction) {
	if (direction === 'up') {
		ActiveSlideIndex++;
		if (ActiveSlideIndex > maxIndex) {
			ActiveSlideIndex = 0;
		}
	} else if (direction === 'down') {
		ActiveSlideIndex--;
		if (ActiveSlideIndex < 0) {
			ActiveSlideIndex = maxIndex;
		}
	}
	mainSlide.style.top = -`${ActiveSlideIndex}` * 100 + 'vh';
	sidebar.style.top = -`${maxIndex - ActiveSlideIndex}` * 100 + 'vh';
}
