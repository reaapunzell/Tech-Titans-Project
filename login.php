<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Establish connection
    $con = new mysqli('localhost', 'roots', 'Jempi125', 'Login_Form');

    // Check connection
    if ($con->connect_error) {
        die('Connection failed: ' . $con->connect_error);
    }

    // Prepare SQL query to check if the email exists
    $sql = "SELECT * FROM `Registrations` WHERE email = '$email'";
    $result = $con->query($sql);

    if ($result->num_rows > 0) {
        // Email exists, now check if the password matches
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Password is correct, insert into LoginData and redirect to Home
            $sql_insert = "INSERT INTO `Logins` (email, password) VALUES ('$email', '$password')";
            if ($con->query($sql_insert) === TRUE) {
                header("Location: finance.html");
                exit();
            } else {
                die('Error: ' . $con->error);
            }
        } else {
            // Incorrect password, show pop-up and redirect to Landing Page
            echo "<script>alert('Incorrect password'); window.location.href='LandingPage.html';</script>";
        }
    } else {
        // Email does not exist, show pop-up and redirect to Landing Page
        echo "<script>alert('User is not registered'); window.location.href='LandingPage.html';</script>";
    }

    // Close connection
    $con->close();
}
?>