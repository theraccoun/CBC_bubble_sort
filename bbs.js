$(document).ready(function(){
	// for(var i=0; i<5; i++){
	// 	$('body').append("<div class='sortElement'><p class='number'>" + i + "</p>");
	// }

	$('#bucketMaster').children('div').each(function(i) {
		// alert(i);
		// $(this).css('background-color', 'red');
		var rand = Math.floor(Math.random()*11);
		$(this).append("<div class='sortElement'><p class='number'>" + rand + "</p>");
	});

	$('.sortElement').draggable();

	




	$fd =$('.folddown_instructions');	
	$($fd).click(function(){
		$($fd).children().slideToggle('slowly');
		// $($fd).children().remove();
		// $muha = $('<p>Muhahahahhahahah</p>');
		// $($fd).append($muha);
	});
});
