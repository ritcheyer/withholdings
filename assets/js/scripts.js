(function($) {

	// Display last edited date and today's date (today's date is based on the server's location)

	var lastEdited = new Date(2014, 2, 1, 0, 0, 0);
	var serverDate = new Date();

	$( '#footer [data-time="last-edited"]' ).text(  lastEdited.toDateString() );
	$( '#footer [data-time="server"]' ).text(  serverDate.toDateString() );




})(jQuery);
