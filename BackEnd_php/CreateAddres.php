<?php
    include 'config.php';
      $postdata = file_get_contents("php://input");
      $user_id="";
      $addres_user="";
      $latitude="";
      $longitude="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $user_id = $request->user_id;
          $addres_user = $request->addres_user;
          $latitude = $request->latitude;
          $longitude = $request->longitude;
      }
      $sql = mysqli_query($conn,"INSERT INTO addres ( user_id, addres_user,latitude,longitude)
      VALUES ('$user_id', '$addres_user','$longitude',  '$latitude')");
      if($sql){
          $getUserSql=mysqli_query($conn, "SELECT * from addres s JOIN user r WHERE s.user_id=r.user_id && s.user_id='$user_id' ");
          if (mysqli_num_rows($getUserSql)) {
            $row = mysqli_fetch_assoc($getUserSql);
            $data =array(
                'message' => "Data have been recorded",
                'data' => $row,
                'status' => "200"
            );
          }
          else{
            $data =array(
                'message' => "ERROR",
                'status' => "404"
            );
          }
      }
 else {
    echo "Error" .$sql.' '.$conn->connect_error;
    $data =array(
        'message' => "ERROR",
        'status' => "404"
    );
  }
  echo json_encode($data);
?>
