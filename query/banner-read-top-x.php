<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  include_once '../model/config/conn.php';
  include_once '../model/object/bannerObject.php';

  $cant = $_GET['cant'];

  $database = new Database();$db = $database->getConnection();
  $banner = new Banner($db);
  $stmt = $banner->read_top_x(3);
  $num = $stmt->rowCount();

  if ($num>0) {
    $banner_arr = array();
    $banner_arr["bannerList"]=array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $banner_item = array(
        "id" => $bann_id,
        "imag_src" => $bann_imag_src,
        "description" => $bann_placeholder
      );

      array_push($banner_arr["bannerList"], $banner_item);
    }

    echo json_encode($banner_arr);
  } else {
    echo json_encode(array("message" => "No banners found."));
  }
?>
