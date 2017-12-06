<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $user_id="";
      $total_price="";
      $order_quantity="";
      $total_cost_payment="";
      $total_kembalian="";
      $id_goods="";
      $sum=$num1+$num2;
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $user_id = $request->user_id;
          $total_price = $request->total_price;
          $order_quantity = $request->order_quantity;
          $total_cost_payment = $request->total_cost_payment;
          $total_kembalian = $request->total_kembalian;
          $id_goods = $request->id_goods;

      }

  $sql = mysqli_query($conn,"INSERT INTO order_goods ( user_id,total_price,order_quantity,total_cost_payment,total_kembalian,id_goods)
  VALUES ('$user_id','$total_price', '$order_quantity','$total_cost_payment''$total_kembalian''$id_goods')");
  if($sql){
      $data =array(
          'message' => "Order have been created",
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
