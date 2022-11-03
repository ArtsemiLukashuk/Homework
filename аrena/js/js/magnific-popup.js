// magnificPopup start
$(document).ready(function () {
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		// other options
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%'
				},
			},
			srcAction: 'iframe_src',
		}
	});
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function () {
				if ($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	$(".gallery__list, .gallery-list").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true
		}
	})
});
// magnificPopup end