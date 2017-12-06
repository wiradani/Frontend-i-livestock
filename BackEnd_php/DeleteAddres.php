<?php
include('config.php');
 $postdata = file_get_contents("php://input");
 $addres_name="";
 if (isset($postdata)) {
     $request = json_decode($postdata);
     $addres_name = $request->addres_name;
 }

 $data = mysqli_query($conn, "DELETE FROM addres WHERE addres_name = $addres_name");
 if($data){
 echo "Addres successfully removed!";
}else{
 echo "Upss Something wrong..";
}

$conn->close();
?>
