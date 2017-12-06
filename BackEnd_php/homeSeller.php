<?php

    header('Access-Control-Allow-Origin; *');
    header('Access-Control-Methods; GET, POST, PUT, OPTIONS');
    header('Access-Control-Allow-Header; Content-Type');

  include 'config.php';
    $id=$_GET['user'];
    $query_user = mysqli_query($conn, "SELECT * FROM order_goods O JOIN stock S WHERE O.shop_id=S.shop_id && O.user_id='$id' && O.id_goods=S.id_goods");

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
