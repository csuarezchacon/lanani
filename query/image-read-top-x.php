<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  include_once '../model/config/conn.php';
  include_once '../model/object/imageObject.php';

  $id = $_GET['id'];
  $cant = $_GET['cant'];

  $database = new Database();$db = $database->getConnection();
  $image = new Image($db);

  $stmt = $image->read_top_x($id, $cant);
  $num = $stmt->rowCount();

  if ($num>0) {
    $image_arr = array();
    $image_arr["imageList"]=array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
      $image_item = array(
        "id" => $imag_id,
        "url" => $imag_url,
        "order" => $imag_order
      );
      array_push($image_arr["imageList"], $image_item);
    }
    echo json_encode($image_arr);
  } else {
    http_response_code(404);
    echo json_encode(array("message" => "No products found."));
  }
?>
