<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $addres_name="";
      $addres_province="";
      $addres_city="";
      $addres_state="";
      $addres_street="";
      $user_id="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $addres_name = $request->addres_name;
          $addres_province = $request->addres_province;
          $addres_city = $request->addres_city;
          $addres_state = $request->addres_state;
          $addres_street = $request->addres_street;
          $user_id = $request->user_id;
      }
  $sql = mysqli_query($conn,"UPDATE addres SET addres_name = '$addres_name', addres_province = '$addres_province', addres_city = '$addres_city' , addres_state = '$addres_state', addres_street = '$addres_street 'WHERE user_id = {$user_id}");
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
