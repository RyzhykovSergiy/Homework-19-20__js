$(document).ready(function() {

	$('.carousel .owl-carousel').owlCarousel({
			autoplay: true,
			autoplayHoverPause: true,
			loop:true,
			margin:10,
			nav: false,
			items: 1,
			dots: true
	})
				
	$('.news__item ').on('click', '.news__read', function (e){
			var	heightH = $(this).parent('.news__item ').children('.news__descr').css("height");
			if (heightH === "60px") {
				$(this).parent('.news__item ').children('.news__descr').css("height", "auto");
			} else {
				$(this).parent('.news__item ').children('.news__descr').css("height", "60px");
			}

	}); 

$(".accordian__cont").not(":first").hide();
$(".accordian__item").parent('.accordian__list').addClass("active");
$(".accordian__item").parent('.accordian__list').not(":first").removeClass("active");

	$('.accordian__item').on('click', function (e){
		$('.accordian__list').removeClass("active");
		$('.accordian__cont').slideUp();
		$(this).parent('.accordian__list').children(".accordian__cont").slideToggle();
		$(this).parent('.accordian__list').addClass("active");

	}); 

});

