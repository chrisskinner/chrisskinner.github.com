$(function(){
$('.overlay').hide();
$('.details').hide();
$('.carttotal').hide();
});

function showProduct(info){

	var detail = closeUp [info];

	$('.overlay').show();
	$('.details').show();
	$('#album').text(detail.album);
	$('#label').text(detail.lable);
	$('#image').attr('src',detail.image);
	$('#description').text(detail.description);
	
	
	$('#songlist').empty();

	for (var i = 0; i < detail.tracks.length; i++){
		$("<li>").text(detail.tracks[i]).appendTo("#songlist");
	}; 

	$('#soundcloud').empty().append(
			$('<iframe width="465" height="180" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+detail.cloud+'&amp;auto_play=false&amp;hide_related=false&amp;visual=true"></iframe>')
			);
	$('.buybox1button').click(function(){
		var quantity = 1;
		addItem("mp3", quantity);
		updateCart();
	})
	$('.buybox2button').click(function(){
		var quantity = 1;
		addItem("vinyl", quantity);
		updateCart();
	})

};

var cart = { }

function addItem(info, quantity){

	if(!cart[info]) { cart[info] = 0; }
   cart[info] += quantity;

};

function updateCart(){

var total = 0;
var items = 0;

	for (var info in cart){
		var quantity = cart[info];
		var price = prices[info];
		items += quantity;
		total += price * quantity;
	}

	$('#cart').text("You have " + items + " items with total cost of $" + total.toFixed(2));

};

function hideProduct(){
	$('.carttotal').hide();
	$('.overlay').hide();
	$('.details').hide();
	$('.buybox1').off('click');
	$('.buybox2').off('click');
};

function showCartTotal(){

$('.carttotal').show();
$('.overlay').show();

};

function showItem(name, quantity, price) {
    var item = $("<div class='item'>");
    
    item.append( $("<div class='name'>").text(name) );
    item.append( $("<div class='price'>").text(quantity + " X $" + price + "=") );
    item.append( $("<div class='subtotal''>").text("$" + (quantity * price)) );    
    
    $(".carttotal").append(item);
  }
 

//event handlers

$(function() {

	$('.album').click(function(){
		var info = $(this).data("product-id");
		showProduct(info);
	});
	$('.overlay').click(function(){
		hideProduct();
	});
	$('.cartbutton').click(function(){
		showCartTotal();
	});
	

});