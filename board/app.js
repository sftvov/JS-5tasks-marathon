const ROWS = 20;
const COLUMNS = 20;
const colors = ['#F78272', '#D46181', '#EB78E8', '#AB61D4', '#9B7AF5'];
let count = ROWS * COLUMNS;
let width = COLUMNS * 16 + (COLUMNS - 1) * 5;

const container = document.querySelector('.container');
container.style.maxWidth = width + 'px';

for (let i = 0; i < count; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', changeColor);
	square.addEventListener('mouseleave', removeColor);

	container.append(square);
}

function changeColor(e) {
	let index = Math.floor(Math.random() * colors.length);
	let color = colors[index];
	e.target.style.backgroundColor = `${color}`;
	e.target.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`;
}
function removeColor(e) {
	e.target.style.backgroundColor = '#1d1d1d';
	e.target.style.boxShadow = '0 0 3px #1d1d1d';
}
