<?php
//get data from form  
$name = $_POST['name'];
$phone= $_POST['phone'];
$email= $_POST['email'];
$message= $_POST['message'];
$subject= $_POST['subject'];


$to = "technicallead@codeupglobal.com,aravind@codeupglobal.com,manjunath@codeupglobal.com,balasubramani.g@vinteksolution.com";
$txt ="Name = ". $name . "\r\n Phone =" . $phone."\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: aravind@codeupglobal.com" . "\r\n";
if(mail($to, $subject, $txt, $headers)) echo json_encode(['success'=>true]); 
     else echo json_encode(['success'=>false]);
     exit;
?>