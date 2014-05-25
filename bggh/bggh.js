$(function(){
$('.overlay').hide();
$('.aboutpage').hide();
$('.filterpage').hide();
$('.uploadpage').hide();
$('.bigview').hide();
$('.bigview2').hide();
});


$(function() {

	$('.about').click(function(){
		$('.overlay').show();
		$('.aboutpage').show();
	});

	$('.overlay').click(function(){
		$('.overlay').hide();
		$('.aboutpage').hide();
	});

	$('.filter').click(function(){
		$('.filterpage').show();
	});

	$('.close-command').click(function(){
		$('.filterpage').hide();
		
	});

	$('.upload').click(function(){
		$('.uploadpage').show();
	});

	$('.cancelbutton').click(function(){
		$('.uploadpage').hide();
	});

	$('.sticker9').click(function(){
		$('.bigview').show();
		$('.sticker9').hide();
	});
	$('.map').click(function(){
		$('.bigview').hide();
		$('.bigview2').hide();
		$('.sticker9').show();
		$('.pin-22').show();
	});

	$('.pin-22').click(function(){
		$('.bigview2').show();
		$('.pin-22').hide();
		$('.pic2').hide();
	});
	$('.pic1').click(function(){
		$('.pic2').show();
		$('.pic1').hide();
	});
	$('.pic2').click(function(){
		$('.pic1').show();
		$('.pic2').hide();
	});

});
