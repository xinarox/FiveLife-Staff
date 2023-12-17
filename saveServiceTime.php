<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $startTime = $_POST["startTime"];
    $endTime = $_POST["endTime"];
    $timeDiff = $_POST["timeDiff"];

    // Enregistrez ces valeurs dans votre base de données ou tout autre système de stockage.
    // Exemple d'utilisation de MySQL (vous devez configurer la connexion à votre base de données) :
    /*
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "database";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO service_times (start_time, end_time, time_diff) VALUES ('$startTime', '$endTime', '$timeDiff')";

    if ($conn->query($sql) === TRUE) {
        echo "Record saved successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    */
    echo "Record saved successfully";
} else {
    echo "Invalid request";
}
?>
