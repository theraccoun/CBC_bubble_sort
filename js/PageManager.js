function toggleActiveSideNav(curButton){
    $('.active').removeClass('active');
    $(curButton).addClass('active');
}

var menuButtonManager = 
{
	about: function (curButton)
	{
		toggleActiveSideNav(curButton);
		// if($('#playElements').length != 0)
		// 	$('#playElements').remove();
		
		// if($('#bucketMaster').length != 0)
		// 	$('#bucketMaster').remove();

		this.removeAll();

		var aboutMessage = "<p> Often when we are first learning new algorithms we are bombarded" +
		" by a great deal of text and psuedocode. When I learn new algorithms, I usually" + 
		" bust out a sheet of paper and begin drawing how the data is getting transformed as" +
		" the algorithm proceeds. </p>" +

		"<p> Concept before code is a tool I built so that people who want to test their conceptual" + 
		" knowledge of various algorithms can do so by using a visual, interactive, simulated representation of" + 
		" how the data is transformed as you iterate through the algorithm. This should improve the learning" + 
		" and understanding of the algorithm! </p>";

		var $aboutdiv = $("<div class='well span5 removable'>" + aboutMessage + "</div>");

		$('body').append($aboutdiv);

	},

	play: function(curButton)
	{

		window.open("http://www.stevenmaccoun.info/miscellaneous/samp1.html");

	},

	contact: function(curButton)
	{
		toggleActiveSideNav(curButton);
		this.removeAll();

		var contactMessage = "<p> Please send comments to <font color='blue'>theraccoun@gmail.com </font> </p>";
		var $contactDiv = $("<div class='well span5 removable'>" + contactMessage + "</div>");

		$('body').append($contactDiv);
	},

	removeAll: function()
	{
		if($('.removable').length != 0){
			$('.removable').detach();
		}
	}
}

