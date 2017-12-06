<?php

    header('Access-Control-Allow-Origin; *');
    header('Access-Control-Methods; GET, POST, PUT, OPTIONS');
    header('Access-Control-Allow-Header; Content-Type');

  include 'config.php';
    //$id=$_GET['user'];
    $query_user = mysqli_query($conn, "SELECT shop_name,addres_user,stars FROM shop O JOIN addres R
      ON O.user_id=R.user_id JOIN Rating  T On O.shop_id=T.shop_id ");

    $result_set = array();
    while($result =mysqli_fetch_assoc($query_user)){
        $result_set[]=$result;
    }
$data =array(
    'message' => "Get Data User Succses",
    'data' => $result_set,
    'status' => "200"
);

echo json_encode($data);
?>
