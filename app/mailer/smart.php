
<?php 
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/Exception.php';

	$mail = new PHPMailer(true);
	$mail ->CharSet = 'UTF-8';
	$mail ->setLanguage('ru', 'phpmailer/language/');
	$mail ->IsHTML(true);

	//mail from:
	$mail ->setFrom('info@fls.guru', 'This is my name');
	//mail to:
	$mail ->addAdress('stebataras@gmail.com');
	//mail about:
	$mail ->Subject = 'Hi , This is my first mail';

	//body's mail:
	$body = '<h1>Congratulation, Great mail!</h1>';

	if(trim(!empty($_POST['name']))){
		$body = '<p><strong>Name:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body = '<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body = '<p><strong>Message:</strong> '.$_POST['message'].'</p>';
	}
	//sending mail:
	if(!$mail->send()) {
		$message = 'Error!'
	}else {
		$message = 'Data is sending!'
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo Json_encode($response);

?>