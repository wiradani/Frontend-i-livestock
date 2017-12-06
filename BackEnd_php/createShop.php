<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $shop_id="";
      $shop_name="";
      $user_id="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $user_id = $request->user_id;
          $shop_name = $request->shop_name;
          $shop_id = $request->shop_id;

      }

  $sql = mysqli_query($conn,"INSERT INTO shop ( user_id, shop_name) VALUES ('$user_id','$shop_name')");
  if($sql){
      $data =array(
          'message' => "Your new shop have been recorded",
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
