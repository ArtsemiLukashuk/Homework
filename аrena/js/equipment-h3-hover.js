// Hover h3 color for Equipment pic start
var picDiv = document.querySelectorAll('.equipment__wrapper-pic')[0];
picDiv.addEventListener('mouseover', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[0];
	h3.style.color = "#007bff";
	h3.classList.add('active');
});
picDiv.addEventListener('mouseleave', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[0];
	h3.style.color = null;
	h3.classList.remove('active');
});
var picDiv = document.querySelectorAll('.equipment__wrapper-pic')[1];
picDiv.addEventListener('mouseover', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[1];
	h3.style.color = "#007bff";
	h3.classList.add('active');
});
picDiv.addEventListener('mouseleave', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[1];
	h3.style.color = null;
	h3.classList.remove('active');
});
var picDiv = document.querySelectorAll('.equipment__wrapper-pic')[2];
picDiv.addEventListener('mouseover', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[2];
	h3.style.color = "#007bff";
	h3.classList.add('active');
});
picDiv.addEventListener('mouseleave', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[2];
	h3.style.color = null;
	h3.classList.remove('active');
});
var picDiv = document.querySelectorAll('.equipment__wrapper-pic')[3];
picDiv.addEventListener('mouseover', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[3];
	h3.style.color = "#007bff";
	h3.classList.add('active');
});
picDiv.addEventListener('mouseleave', function (event) {
	var h3 = document.querySelectorAll('.equipment__card-title')[3];
	h3.style.color = null;
	h3.classList.remove('active');
});
// Hover h3 color for Equipment pic end