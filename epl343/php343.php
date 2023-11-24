<?php
	$FirstName = $_POST['First Name'];
	$LastName = $_POST['Last Name'];
	$AcademicID = $_POST['Academic ID'];
	$Email = $_POST['Email'];
    $TelephoneNumber = $_POST['Telephone Number'];
    $Address=$_POST['Address'];
    $StudyDepartment=$_POST['Study Department'];
	$Password = $_POST['Password'];
    $RepeatPassword = $_POST['Repeat Password'];
	

	// Database connection
	$conn = new mysqli('localhost','root','anton','usersdata');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(First Name, Last Name, Academic ID, Email, Telephone Number, Address, Study Department, Password, Repeat Password) values(?, ?, ?, ?, ?, ?,?,?,?)");
		$stmt->bind_param("ssisissss", $FirstName, $LastName, $AcademicID, $Email, $TelephoneNumber, $Address, $StudyDepartment, $Password, $RepeatPassword );
		$stmt->execute();
		// $execval = $stmt->execute();
		// echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>