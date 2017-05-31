$(function(){
	var hex = "";
	var changeColor = 0;
	var audio = $('#shagalaga'); 
	// audio.onended = function() {
	//     alert("The audio has ended");
	// }; 
	$('.shaggy2').hover(function(){
		$(this).addClass('show');
		$('body').addClass('colorful');
		setInterval(colorLight, 250);
		audio[0].play();
	});
	
	function colorLight(){
		hex = '#'+Math.floor(Math.random()*16777215).toString(16);
		$('.colorful').css('background',hex);
		// console.log(hex);
	};

	audio[0].bind('ended', function(){ 
		// $('body').removeClass('colorful');
  //   	$('body').css('background', 'white');
  //   	$('.shaggy2').removeClass('show');
    	console.log('end');
	});

});