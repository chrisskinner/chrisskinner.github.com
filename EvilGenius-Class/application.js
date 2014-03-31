// Write our base functions
$(function(){
$('.overlay').hide();
$('.details').hide();
});

function showProduct(bot){

	var robot = Robots [bot];

	$('.overlay').show();
	$('.details').show();
	$('#detail-title').text(robot.title);
	$('#detail-image').attr('src',robot.image);
	$('#detail-description').text(robot.description);
	$('#detail-price').text("$" + robot.price);
	$('<iframe width="605" height="180" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + '&amp;auto_play=false&amp;hide_related=false&amp;visual=true"></iframe>')
};

function hideProduct(){
	$('.overlay').hide();
	$('.details').hide();
};

// When the page loads, add in our event handlers
$(function() {

	$('.product').click(function(){
		var bot = $(this).data("product-id");
		showProduct(bot);
	});
	$('.overlay').click(function(){
		hideProduct();
	});
});
