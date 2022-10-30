var readMore = document.getElementsByClassName("show")[0];
readMore.addEventListener('click', function (event) {
	var paragraph = document.querySelector('.stream__twitch');

	console.log(paragraph.style.display)
	if (paragraph.style.display === "") {
		paragraph.style.display = "block";
		event.target.innerHTML = "Скрыть";
	} else {
		paragraph.style.display = "";
		event.target.innerHTML = "Показать";
	}
})