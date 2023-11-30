<?php
// $serverName = "mssql.cs.ucy.ac.cy"; //serverName\instanceName
// $connectionInfo = array("Database" => "aloizo04", "UID" => "aloizo04", "PWD" => "C3vkbfbv");
// $conn = sqlsrv_connect($serverName, $connectionInfo);

if (strcasecmp($_SERVER["REQUEST_METHOD"], 'POST') == 0) {
    if (strcasecmp($_SERVER["CONTENT_TYPE"], "application/json") == 0) {
        $json = trim(file_get_contents("php://input"));
        $data = json_decode($json);

        $conn = mysqli_connect(
            "mssql.cs.ucy.ac.cy",
            "aloizo04",
            "C3vkbfbv"
        ) or die("Could not connect: " . mysqli_error($conn));
        echo json_encode("Connected succesfully post <br/>");

        mysqli_select_db($conn, "aloizo04") or die("db will not open" .
            mysqli_error($conn));

        $query = "SELECT R.USERNAME,R.PASSWORD,U.SYSTEM_ADMINISTRATOR,U.ACCOMMONDATION_MANAGER FROM REGISTRATION R,USERS U WHERE R.USERNAME='$data->username' AND R.PASSWORD=$data->password;";

        $result = mysqli_query($conn, $query) or die("Invalid query");
        mysqli_close($conn);

        $query_data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($query_data, $row);
        }

        echo json_encode($query_data);
    }
}
