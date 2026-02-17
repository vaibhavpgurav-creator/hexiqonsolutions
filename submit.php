<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $project = $_POST['project_type'];
  $message = $_POST['message'];

  $to = "yourmail@example.com";
  $subject = "New Project Enquiry - Hexiqon Solutions";

  $body = "
  Name: $name
  Phone: $phone
  Email: $email
  Project Type: $project

  Message:
  $message
  ";

  $headers = "From: $email";

  mail($to, $subject, $body, $headers);

header("Location: thank-you.html");
exit;

?>
