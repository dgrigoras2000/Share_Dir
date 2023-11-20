<?php
$serverName = "mssql.cs.ucy.ac.cy"; //serverName\instanceName
$connectionInfo = array("Database" => "aloizo04", "UID" => "aloizo04", "PWD" => "C3vkbfbv");
$conn = sqlsrv_connect($serverName, $connectionInfo);

$query="SELECT R.USERNAME,R.PASSWORD,U.SYSTEM_ADMINISTRATOR,U.ACCOMMONDATION_MANAGER FROM REGISTRATION R,USERS U WHERE R.USERNAME=U.USERNAME;";
// $result=
?>