// News carousel start
$('#owl-carousel').each(function () {
	var owl = $(this).find('.owl-carousel').owlCarousel({
		margin: 10,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 2,
			},
			1100: {
				items: 3
			}
		}
	});
	$(this).find('.js-prev').on('click', function () {
		owl.trigger('prev.owl.carousel');
	});
	$(this).find('.js-next').on('click', function () {
		owl.trigger('next.owl.carousel');
	});
});
// News carousel end