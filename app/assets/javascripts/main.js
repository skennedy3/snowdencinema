$(document).ready(function(){


$('header').on('click', '#navlist li', function(e){

	if(!$(this).hasClass('selected')){
		var curPane = $('#navlist li.selected').data('pane');
		$('#navlist li.selected').removeClass('selected');
		
		$('div#' + curPane).addClass('hidden');
		$(this).addClass('selected');
		$('div#' + $(this).data('pane')).removeClass('hidden');
		}

});

});