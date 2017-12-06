<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $lokasi_nama="";
      $latitude="";
      $longitude="";

      if (isset($postdata)) {
          $request = json_decode($postdata);
          $lokasi_nama = $request->lokasi_nama;
          $latitude = $request->latitude;
          $longitude = $request->longitude;

      }

  $sql = mysqli_query($conn,"INSERT INTO lokasi ( lokasi_nama,latitude,	longitude)
  VALUES ('$lokasi_nama','$latitude', '$longitude')");
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
