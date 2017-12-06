<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $brand="";
      $price="";
      $quantity="";
      $id_goods="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $brand = $request->brand;
          $price = $request->price;
          $quantity = $request->quantity;
          $id_goods = $request->id_goods;
      }
  $sql = mysqli_query($conn,"UPDATE stock SET brand = '$brand', price = '$price', quantity = '$quantity' WHERE id_goods = '$id_goods'");
    if($sql){
      $data =array(
          'message' => "Data have been updated",
          'data' => $request,
          'status' => "200"
      );}
 else {
    echo "Error" .$sql.' '.$conn->connect_error;
    $data =array(
        'message' => "Error while updating record :",
        'status' => "404"
    );
  }
  echo json_encode($data);

?>
