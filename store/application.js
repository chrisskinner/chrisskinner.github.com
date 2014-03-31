
$(function(){
$('.overlay').hide();
$('.details').hide();
});

function showProduct(info){

	var detail = closeUp [info];

	$('.overlay').show();
	$('.details').show();
	$('#artist').text(detail.artist);
	$('#album').text(detail.album);
	$('#label').text(detail.album);
	$('#image').attr('src',detail.image);
	$('#description').text(detail.description);
	
	
	$('#songlist').empty();

	for (var i = 0; i < detail.tracks.length; i++){
		$("<li>").text(detail.tracks[i]).appendTo("#songlist");
	}; 

	$('#soundcloud').empty().append(
			$('<iframe width="465" height="180" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+detail.cloud+'&amp;auto_play=false&amp;hide_related=false&amp;visual=true"></iframe>')
			);

};

function hideProduct(){
	$('.overlay').hide();
	$('.details').hide();
};

//event handlers

$(function() {

	$('.album').click(function(){
		var info = $(this).data("product-id");
		showProduct(info);
	});
	$('.overlay').click(function(){
		hideProduct();
	});

});