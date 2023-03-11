const moon = document.querySelector('.moon');
const emoji = document.querySelector('.sleep-emoji');

moon.addEventListener('click', () => {
	setTimeout(() => {
		document.body.classList.toggle('bg-light');
		moon.classList.toggle('sun');
		if (moon.classList.contains('sun')) {
			emoji.innerHTML = '&#x1F601;';
		} else {
			emoji.innerHTML = '&#x1F634;';
		}
	}, 1000);
});