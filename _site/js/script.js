(function(){
	$(window).on('load', function(){
		// start modified instagram feed script
				$.instagramFeed({

					'username': '{{page.name}}',
					'container': "#instagram-feed-demo",
					'display_profile': true,
					'display_biography': true,
					'display_gallery': true,
					'get_raw_json': false,
					'callback': null,
					'styling': true,
					'items': 36,
					'items_per_row': 6,
					'margin': 0.3
				});
			});

	// placeholder for possible data from jekyll file to change background color based on streamer
	var streamer = $('.hero').attr('data-streamer');

	if( streamer == 'lydiapudin_'){
		$('.hero').css({
			// 'background': 'linear-gradient(90deg, purple 75%, #e3e3e3 25%)'
			background: 'purple'
		});
	}

	// get clip img element and remove opacity to allow video to show
	$('.clip-link').hover( 
		function() {
			$('.clip img').addClass('fadeOut');
			$('.clip img').removeClass('fadeIn');
		},
		function() {
			$('.clip img').addClass('fadeIn');
			$('.clip img').removeClass('fadeOut');
		});
})();