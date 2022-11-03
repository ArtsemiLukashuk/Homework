// videobackground start
$(document).ready(function () {
	if (!$.browser.mobile) {
		$('.video-background').videobackground({
			videoSource: [['video/video.mp4', 'video/mp4'],
			['video/video.ogv', 'video/ogg']],
			poster: 'video/video.jpg',
			loop: true,
			controlPosition: '#msds',
			resize: 0,
			loadedCallback: function () {
				$(this).videobackground('mute');
			}
		});
		var myVideo = $('.video-background').find('video').get(0);
		$('body').on('touchstart', function () {
			if (myVideo.paused) {
				myVideo.play();
			}
		});
	}
	else {
		$('.video-background').prepend('<img src="video/video.jpg" width="" height="" alt="">');
	}
});
$(document).ready(function () { $("video").prop('muted', true); })
// videobackground end