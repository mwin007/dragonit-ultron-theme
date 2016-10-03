<?php
$admin_email = $email = $subject = $comment = "";
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

//if "email" variable is filled out, send email
if (isset($_REQUEST['email']))  {

  //Email information
  $admin_email = "nguyen0martin@gmail.com";
  $email = test_input($_REQUEST["email"]);
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['comments'];

  if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    //send email
    $result = mail($admin_email, "$subject", $comment, "From:" . $email);

    //Email response
    //echo "<script type='text/javascript'>alert('submitted successfully!')</script>";
    /*
    echo '<script type="text/javascript">';
    echo 'alert("submitted successfully!");';
    echo 'window.location.href = "index.html";';
    echo '</script>';
    */
    if(!$result) {
      readfile("fail-alert.html");
    }
    else {
      readfile("success-alert.html");
    }
  }
  else {
    readfile("email-validate-alert.html");
  }
}
//if "email" variable is not filled out, display the form
else  {
  readfile("missing-email-alert.html");

}


