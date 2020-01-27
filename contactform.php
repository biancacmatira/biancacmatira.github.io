<?php
    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    $email_from = $email_address;

    $email_subject = "New Form Submission";

    $email_body =   "Name : $name.\n".
                    "Email : $email_address.\n".
                    "Message : $message.\n";

    $to = 'matirabianca@gmail.com';

    mail($to,$email_subject,$email_body);
    header("Location: BIANCA | A Portfolio Website");
?>