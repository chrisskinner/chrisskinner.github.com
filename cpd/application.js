$(function(){
$(".mworkinfo").hide();
$(".mworkinfo2").hide();
$('.mhideinfo').hide();
});
//event handlers

$(function() {

	$('.menubutton').click(function(){
		$(".navw2").toggleClass("navw2open"); 
		$(".nav2").toggleClass("nav2open");
		$(".block").toggleClass("block4");
		$(".block2").toggleClass("block5");
		$(".block3").toggleClass("block6"); 

	});

	$('.mshowinfo').click(function(){
		$(".mworkinfo").show();
		$(".mworkinfo2").show();
		$(".mhideinfo").show();
		$(".mshowinfo").hide();  
	});

	$('.mhideinfo').click(function(){
		$(".mworkinfo").hide();
		$(".mworkinfo2").hide();
		$(".mhideinfo").hide();
		$(".mshowinfo").show();  
	});

	

});