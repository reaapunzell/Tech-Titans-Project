<?php
// Database configuration
$servername = "localhost";
$username = "roots"; // replace with your database username
$password = "Jempi125"; // replace with your database password
$dbname = "Login_Form"; // make sure this database exists

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize form inputs
    $companyname = $conn->real_escape_string($_POST["companyname"]);
    $username = $conn->real_escape_string($_POST['username']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']);

    // Hash the password before storing it for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert form data into the database
    $sql = "INSERT INTO Registrations (companyname, username, email, password) VALUES ('$companyname','$username', '$email', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        // Redirect to the landing page upon successful registration
        echo 'Sign Up Successful';
        header("Location: SignUp.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
