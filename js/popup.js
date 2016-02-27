 var $popup= jQuery.noConflict();  

$popup(document).ready(function() {
	$popup('a.login-window').click(function() {
		
		// Getting the variable's value from a link 
		var loginBox = $popup(this).attr('href');

		//Fade in the Popup and add close button
		$popup(loginBox).fadeIn(300);
		
		//Set the center alignment padding + border
		var popMargTop = ($popup(loginBox).height() + 24) / 2; 
		var popMargLeft = ($popup(loginBox).width() + 24) / 2; 
		
		$popup(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$popup('body').append('<div id="mask"></div>');
		$popup('#mask').fadeIn(300);
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$popup('a.close, #mask').live('click', function() { 
	  $popup('#mask , .login-popup').fadeOut(300 , function() {
		$popup('#mask').remove();  
	}); 
	return false;
	});
});




 var $popup1= jQuery.noConflict();  

$popup1(document).ready(function() {
	$popup1('a.login-window2').click(function() {
		
		// Getting the variable's value from a link 
		var loginBox2 = $popup1(this).attr('href');

		//Fade in the Popup and add close button
		$popup1(loginBox2).fadeIn(300);
		
		//Set the center alignment padding + border
		var popMargTop = ($popup1(loginBox2).height() + 24) / 2; 
		var popMargLeft = ($popup1(loginBox2).width() + 24) / 2; 
		
		$popup1(loginBox2).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$popup1('body').append('<div id="mask2"></div>');
		$popup1('#mask2').fadeIn(300);
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$popup1('a.close2, #mask2').live('click', function() { 
	  $popup1('#mask2 , .login-popup2').fadeOut(300 , function() {
		$popup1('#mask2').remove();  
	}); 
	return false;
	});
});