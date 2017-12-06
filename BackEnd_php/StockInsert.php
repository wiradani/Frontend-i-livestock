<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $brand="";
      $price="";
      $quantity="";
      $id_goods="";
      $type="";
      $shop_id="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $brand = $request->brand;
          $price = $request->price;
          $quantity = $request->quantity;
          $id_goods = $request->id_goods;
          $type = $request->type;
          $shop_id = $request->shop_id;

      }
  $sql = mysqli_query($conn,"INSERT INTO stock ( brand, price, quantity,type,shop_id) VALUES ('$brand','$price', '$quantity','$type','$shop_id')");
  if($sql){
      $data =array(
          'message' => "item have been updated",
          'data' => $request,
          'status' => "200"
      );}
 else {
    echo "Error" .$sql.' '.$conn->connect_error;
    $data =array(
        'message' => "ERROR",
        'status' => "404"
    );
  }
  echo json_encode($data);

?>
