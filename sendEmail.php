<?php
	
	$email = $_POST['email'];
	$comments = $_POST['comments'];
	$title = 'Message from a site visitor';;
	
	$site_owners_email = 'YOUR_EMAIL'; // Replace this with your own email address
	$site_owners_name = 'YOUR_NAME'; // replace with your name
	
	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
		$error['email'] = "Please enter a valid email address";	
	}
	
	if (strlen($comments) < 3) {
		$error['comments'] = "Please leave a comment.";
	}
	
	if (!$error) {
		
		require_once('phpMailer/class.phpmailer.php');
		$mail = new PHPMailer();
		
		$mail->From = $email;
		$mail->FromName = $name;
		$mail->AddAddress($site_owners_email, $site_owners_name);
		$mail->Body = "Subject: " . $title ."\nEmail: " . $email .  "\nMessage: " . $comments;
		$mail->Subject = $title;
		
		$mail->Send();
		
		echo "<div class='success'> Congratulations. We've received your email. We'll be in touch as soon as we possibly can! </div>";
		
	} # end if no error
	else {

		$response .= (isset($error['email'])) ? "<div>" . $error['email'] . "</div> \n" : null;
		$response .= (isset($error['comments'])) ? "<div>" . $error['comments'] . "</div>" : null;
		
		echo $response;
	} # end if there was an error sending

?>