const inner = document.querySelector('.inner');
const images = document.querySelectorAll('.inner-image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const bubblesContainer = document.querySelector('.bubbles');
let bubbles = [];
let counter = 0;
let width = 45;

function switching() {
	inner.style.left = -width * counter + 'rem';
	for (let i = 0; i < bubbles.length; i++) {
		if (i === counter) {
			bubbles[i].classList.add('active');
		} else {
			bubbles[i].classList.remove('active');
		}
	}
}

for (let i = 0; i < images.length; i++) {
	const b = document.createElement('span');
	b.classList.add('bubble');
	bubblesContainer.appendChild(b);
	bubbles.push(b);
	
	b.addEventListener('click', () => {
		counter = i;
		switching();
	})
}

next.addEventListener('click', () => {
	counter++;
	if (counter >= images.length) {
		counter = 0;
	}
	
	switching();
});

prev.addEventListener('click', () => {
	counter--;
	if (counter < 0) {
		counter = images.length - 1;
	}
	
	switching();
});

switching();
