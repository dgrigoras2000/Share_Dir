<?php
if (strcasecmp($_SERVER["REQUEST_METHOD"], 'POST') == 0) {
    if (strcasecmp($_SERVER["CONTENT_TYPE"], "application/json") == 0) {
        $json = trim(file_get_contents("php://input"));
        $data = json_decode($json);

        $serverName = "mssql.cs.ucy.ac.cy";
        $connectionOptions = array(
            "Database" => "mchara15",
            "Uid" => "mchara15",
            "PWD" => "JbZt8D1v"
        );

        $productCode = $data->productCode;
        $size = $data->size;
        $numberOfRooms = $data->numberOfRooms;
        $price = $data->price;

        // Establishes the connection
        $conn = sqlsrv_connect($serverName, $connectionOptions);

        if (!$conn) {
            die(print_r(sqlsrv_errors(), true));
        }

        $tsql = "EXEC ProcedureName";
        $getResults = sqlsrv_query($conn, $tsql);

        if ($getResults === false) {
            die(print_r(sqlsrv_errors(), true));
        }

        $users = array();
        while ($row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_ASSOC)) {
            array_push($users, $row);
        }

        // Close the connection
        sqlsrv_close($conn);

        // Output JSON
        echo "Query Succesfull";
    }
}
