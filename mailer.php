<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {

  
  //Email information
  $admin_email = "omprakashrahangdale555@gmail.com";
  $name = $_REQUEST['name'];
  $email = $_REQUEST['email'];
  $phone = $_REQUEST['phone'];
  $state = $_REQUEST['state'];
  $postcode = $_REQUEST['postcode'];
  $service = $_REQUEST['service'];
  $message = $_REQUEST['message'];

$subject="Customer contact on  Solar Boost Australia  ";

$msg="Following are the customer details:<br/><br/>Name: ".$name."<br/><br/>Email: ".$email."<br/><br/>Message: ".$message;

         $header= "From: info@solarboostaustralia.com" . "\r\n" ;
         $header .= "Cc:tushar.pandit7@gmail.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         $retval = mail ($admin_email,$subject,$msg,$header, $name,$email);
  
 
  
  //Email response
  header('Location:index.html');
  
}
  
 
  ?>