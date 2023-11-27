<?php


if (strcasecmp($_SERVER["REQUEST_METHOD"], 'POST') == 0) {
    if (strcasecmp($_SERVER["CONTENT_TYPE"], "application/json") == 0) {
        $json = trim(file_get_contents("php://input"));
        $data = json_decode($json);

        $conn = mysqli_connect("localhost", "root",
        "") or die("Could not connect: " . mysqli_error($conn)); 

        mysqli_select_db($conn, "usersdata") or die("db will not open" .
        mysqli_error($conn));


        $query = "INSERT INTO signup values('$data->firstname', '$data->lastname', '$data->academicid', '$data->email', '$data->telephone', '$data->address','$data->department','$data->password','$data->repeatpassword');";

        $result = mysqli_query($conn, $query) or die("Invalid query");
        mysqli_close($conn);

        $query_data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($query_data, $row);
        }

        echo json_encode($query_data);
    }
}
