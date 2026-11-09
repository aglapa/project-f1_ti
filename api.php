<?php
// Tell the browser this file is returning JSON data
header('Content-Type: application/json');

// 1. Get credentials from Docker's environment variables (Step 2 equivalent)
$host = getenv('DB_HOST');
$user = getenv('DB_USER');
$pass = getenv('DB_PASSWORD');
$db   = getenv('DB_NAME');

// 2. Connect to MySQL
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// 3. Query the database
$result = $conn->query("SELECT * FROM users");
$users = [];

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// 4. Send the data back as JSON
echo json_encode($users);

$conn->close();
?>