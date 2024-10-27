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
    $sales = $conn->real_escape_string($_POST["sales"]);
    $income = $conn->real_escape_string($_POST['income']);
    $expenses= $conn->real_escape_string($_POST['expenses']);
    $liabilities = $conn->real_escape_string($_POST['liabilities']);


    // Insert form data into the database
    $sql = "INSERT INTO Registrations (sales, income, expenses, liabilities) VALUES ('$sales','$income', '$expenses', '$liabilities')";

    if ($conn->query($sql) === TRUE) {
        // Redirect to the landing page upon successful registration
        echo 'Sign Up Successful';
        header("Location: forecast.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
