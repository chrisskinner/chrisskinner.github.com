$.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
      console.log(data);
       for(var i=0;i<data.shots.length;i++) {
       	var item = $("<div class='item'>");
       	var previewImage = $("<img>").attr("src", data.shots[i].image_400_url);
      	var title = $("<h1>").text(data.shots[i].player.name);
        var button = $("<button class='backbutton'>prev</button>");
        $(".container").append(item);
        item.append(previewImage);
        item.append(title);
        createShot(data.shots[i]);
        $(".backbuttonspot").empty();
        $("#detail").empty();
      } 

      function createShot(shot) {

      item.on("click",function() {
        var all = $("<div class='all'>");
        var img = $("<img>").attr("src",shot.image_url);
        var time = $("<h3>").text(shot.created_at);
        var titletwo = $("<h1>").text(shot.player.name);
        var titlethree = $("<h2>").text(shot.title);
        $("#detail").append(all);
        all.append(titlethree);
        all.append(titletwo);
        all.append(img);
        all.append(time);
        $(".container").hide();
        $(".backbuttonspot").append(button);
        $(".backbutton").show();

      });    
    }
    button.on("click",function(){
        $("#detail").empty();
        $(".backbuttonspot").off('click');
        $(".container").show();
        $(".backbutton").hide();
      });
  });