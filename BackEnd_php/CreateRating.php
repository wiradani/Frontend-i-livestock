<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $stars="";
      $review="";
      $user_id="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $user_id = $request->user_id;
          $stars = $request->stars;
          $review = $request->review;

      }

  $sql = mysqli_query($conn,"INSERT INTO Rating ( stars, review) VALUES ('$stars','$review')");
  if($sql){
      $data =array(
          'message' => "Your review have been recorded",
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
