<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  include_once '../model/config/conn.php';
  include_once '../model/object/productObject.php';
  $id = $_GET['id'];
  $database = new Database();$db = $database->getConnection();
  $product = new Product($db);
  $stmt = $product->read_detail($id);
  $num = $stmt->rowCount();
  if ($num>0) {
    http_response_code(200);
    echo json_encode("entró a select");
  } else {
    http_response_code(404);
    echo json_encode(array("message" => "No products found."));
  }
?>
