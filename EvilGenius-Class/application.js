// Write our base functions
$(function(){
$('.overlay').hide();
$('.details').hide();
});

function showProduct(bot){

	var robot = Robots[bot];

	$('.overlay').show();
	$('.details').show();
	$('#detail-title').text(robot.title);
	$('#detail-image').attr('src',robot.image);
	$('#detail-description').text(robot.description);
	$('#detail-price').text("$" + robot.price);
	$('#add-to-cart').click(function(){
		var quantity = parseInt($("#detail-quantity").val())
		addItem(bot,quantity);
		updateCart();
	});
};

var cart = { }

function addItem(bot, quantity){
	
	if(!cart[bot]) { cart[bot] = 0; }
   cart[bot] += parseInt(quantity);

}; 

function updateCart(){

var total = 0;
var items = 0;

	for (var bot in cart){
		var robot = Robots[bot]; 
		var quantity = cart[bot];
		var price = robot.price;
		items += quantity;
		total += price * quantity;
	}

	$('#cart').text(items + "$" + total.toFixed(2));

};

function hideProduct(){
	$('.overlay').hide();
	$('.details').hide();
	$('#add-to-cart').off('click');
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



