const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (let placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragOver);
	placeholder.addEventListener('dragenter', dragEnter);
	placeholder.addEventListener('dragleave', dragLeave);
	placeholder.addEventListener('drop', drop);
}

function dragStart(e) {
	const cl = e.target.classList;
	cl.add('hold');
	setTimeout(() => {
		cl.add('hide');
	}, 0);
}
function dragEnd(e) {
	e.target.className = 'item';
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.target.classList.add('hover');
}

function dragLeave(e) {
	e.target.classList.remove('hover');
}

function drop(e) {
	e.target.classList.remove('hover');
	e.target.append(item);
}
