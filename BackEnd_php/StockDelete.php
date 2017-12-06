<?php
include('config.php');
 $postdata = file_get_contents("php://input");
 $id_goods="";
 if (isset($postdata)) {
     $request = json_decode($postdata);
     $id_goods = $request->id_goods;
 }

 $data = mysqli_query($conn, "DELETE FROM stock WHERE id_goods = $id_goods");
 if($data){
 echo "Successfully removed!";
}else{
 echo "Upss Something wrong..";
}

$conn->close();
?>
