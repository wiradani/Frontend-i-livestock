<?php

    header('Access-Control-Allow-Origin; *');
    header('Access-Control-Methods; GET, POST, PUT, OPTIONS');
    header('Access-Control-Allow-Header; Content-Type');

  include 'config.php';
    $id=$_GET['user'];
    $query_user = mysqli_query($conn, "SELECT * FROM order_goods s JOIN user r JOIN addres k
      ON s.user_id=r.user_id AND k.user_id=r.user_id AND s.shop_id='$id'");

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
