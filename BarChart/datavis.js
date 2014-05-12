$(function(){
	console.log(data);

	for (var i = 0; i<data.length;i++){
		var columns = data[i];
		var wrapper = $('<div>');
		var name = $('<div>').text(data[i][8]);
		var salary = $('<div>').text(data[i][18]);
		var numb = parseFloat(data[i][18])/1000;
		var bar = $('<div class="bar">').css('width',numb);
		wrapper.append(name, salary, bar);
		$('.people').append(wrapper);
	}

});


