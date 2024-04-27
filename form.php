<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];
$gender = $_POST["gender"];
$language = $_POST["language"];
$state = $_POST["state"];
$phone = $_POST["phone"];
header("Location: success.php?name=$name&email=$email&gender=$gender&language=$language&state=$state&phone=$phone");
exit();
} else {
header("Location: index.html");
exit();
}
?>