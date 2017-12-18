$(function() {
	
if(!Modernizr.input.placeholder){             //placeholder for old brousers and IE
 
  $('[placeholder]').focus(function() {
   var input = $(this);
   if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
   }
  }).blur(function() {
   var input = $(this);
   if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
   }
  }).blur();
  $('[placeholder]').parents('form').submit(function() {
   $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
     input.val('');
    }
   })
  });
 }
 
  else { var $inputs = $('input, textarea'), temp;

  $inputs.on('focus', function(){

   temp = $(this).attr('placeholder');
   $(this).attr('placeholder','');


  });
  $inputs.on('blur', function(){

   $(this).attr('placeholder',temp);
   temp = '';


  });
 
}
  
$('#contact-form').submit(function(e) {
      
		e.preventDefault();	
		var error = 0;
		var self = $(this);
		
	    var $email = self.find('[type=email]'),
		$message = self.find('[name=user-message]');	
		
				
		var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		
  		if(emailRegex.test($email.val())) {
			$email.removeClass('invalid_field');
		}
		else {
			createErrTult('Enter proper email', $email)
			error++;	
		} 

		
		if($message.val().length>2 && $message.val()!= $message.attr('placeholder')) {
			$message.removeClass('invalid_field');
		} 
		else {
			createErrTult('Enter at least 3 characters', $message)
			error++;
		}
			
		if (error!=0)return;
		self.find('[type=submit]').attr('disabled', 'disabled');		
        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
			data: '&email=' + $email.val() + '&comments=' + $message.val(),
            success: function(results) {
				self.html(results);
            }
        }); // end ajax
    }); // end submit

$('#main-contact-form').submit(function(e) {
      
		e.preventDefault();	
		var error = 0;
		var self = $(this);
		
	    var $email = self.find('[type=email]'),
		$name = self.find('[name=user-name]'),	
		$message = self.find('[name=user-message]');	
		
				
		var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		
  		if(emailRegex.test($email.val())) {
			$email.removeClass('invalid_field');
		}
		else {
			createErrTult('Enter proper email', $email)
			error++;	
		} 
		
		
		if( $name.val().length>1 &&  $name.val()!= $name.attr('placeholder')  ) {
			$name.removeClass('invalid_field');			
		} 
		else {
			createErrTult('Enter at least 2 characters', $name)
			error++;
		}

		
		if($message.val().length>2 && $message.val()!= $message.attr('placeholder')) {
			$message.removeClass('invalid_field');
		} 
		else {
			createErrTult('Enter at least 3 characters', $message)
			error++;
		}
			
		if (error!=0)return;
				
        $.ajax({
            type: 'post',
            url: 'getEmail.php',
			data: 'name=' + $name.val() + '&email=' + $email.val() + '&comments=' + $message.val(),
            success: function(results) {
				self.html(results);
            }
        }); // end ajax
    }); // end submit
	
});

function createErrTult(text, $elem){
			$('<p />', {
				'class':'inv-em',
				'text':text,
			}).css({'top':$elem.position().top,"left":$elem.position().left})
			.appendTo($elem.addClass('invalid_field').parent()) 
			.delay(3000).fadeOut(300, function(){$(this).remove()});
	}
			