buttonLeft.addEventListener('click', function () {
	if (!(this.classList.contains('active'))) {
		buttonRight.classList.remove('active');
		leftWrapper.classList.remove('active');
		this.classList.add('active');
		rightWrapper.classList.add('active');

	}
});
buttonRight.addEventListener('click', function () {
	if (!(this.classList.contains('active'))) {
		buttonLeft.classList.remove('active');
		rightWrapper.classList.remove('active');
		this.classList.add('active');
		leftWrapper.classList.add('active');
	}
});