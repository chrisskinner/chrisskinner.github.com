$(function() {

  var currentCount = 0;
  
  var counter = $("#counter");
    
function showItem(name, quantity, price) {
    var item = $("<div class='item'>");
    
    item.append( $("<div class='name'>").text(name) );
    item.append( $("<div class='price'>").text(quantity + " X $" + price + "=") );
    item.append( $("<div class='subtotal''>").text("$" + (quantity * price)) );    
    
    $(".cart").append(item);
  }
  
  showItem("Mp3",1,7);
  showItem("Vinyl",1,12);
  showItem("CD",1,10);

  $(".btn").on("click", function(){
   currentCount ++;
    counter.text(currentCount);
    var item = $(this).data("item");
    alert("Added a Mp3");

    });
  
  $(".btn2").on("click", function(){
   currentCount ++;
    counter.text(currentCount);
    var item = $(this).data("item");
    alert("Added a vinyl");

    });
  
  $(".btn3").on("click", function(){
   currentCount ++;
    counter.text(currentCount);
    var item = $(this).data("item");
    alert("Added a cd");

    });

});