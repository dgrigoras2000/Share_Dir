<?php



if(strcasecmp($_SERVER["REQUEST_METHOD"], 'POST') == 0) {
    if(strcasecmp($_SERVER["CONTENT_TYPE"], "application/json") == 0) {
        $json = trim(file_get_contents("php://input"));
        $data = json_decode($json);
        echo $data->address . "\n";
        echo $data->region . "\n";
        echo $data->city . "\n";
        echo $data->username  . "\n";

        $dti=time();
        echo $dti . "\n";
    
        
        // $conn = mysqli_connect("localhost", "root",
        // "") or die("Could not connect: " . mysqli_error($conn)); 
        // echo "Connected succesfully post";

        $conn = mysqli_connect("dbserver.in.cs.ucy.ac.cy", "student",
        "gtNgMF8pZyZq6l53") or die("Could not connect: " . mysqli_error($conn)); 
        echo "Connected succesfully post <br/>";

        mysqli_select_db($conn , "epl425") or die ("db will not open" .
        mysqli_error($conn)); 
        $query = "INSERT INTO requests (username,timestamp,address,region,city,country) VALUES ('$data->username','$dti','$data->address','$data->region',' $data->city','None' )";
        $result = mysqli_query($conn, $query) or die("Invalid query");
        echo "Successful Query";
        mysqli_close($conn); 
    
    }
}

if(strcasecmp($_SERVER["REQUEST_METHOD"], 'GET') == 0) {


        // $conn = mysqli_connect("localhost", "root","") or die("Could not connect: " . mysqli_error($conn)); 
        // echo "Connected succesfully post <br/>";
        
        $conn = mysqli_connect("dbserver.in.cs.ucy.ac.cy", "student",
        "gtNgMF8pZyZq6l53") or die("Could not connect: " . mysqli_error($conn)); 
        //echo "Connected succesfully get <br/>";
        mysqli_select_db($conn , "epl425") or die ("db will not open" .
        mysqli_error($conn));
        $query = "SELECT * FROM requests WHERE username='aioann19' ORDER BY timestamp DESC LIMIT 5;";
        $result = mysqli_query($conn, $query) or die("Invalid query");
        mysqli_close($conn);
        
        $users = array();
        while($row = mysqli_fetch_assoc($result)) {
            array_push($users, $row);
        }
        
        echo json_encode($users);
        
    
}








?>
