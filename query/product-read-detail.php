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
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);
      $product_item = array(
        "date" => $prod_date,
        "description_lg" => $prod_description_lg,
        "description_sm" => $prod_description_sm,
        "name" => $prod_name,
        "price" => $prod_price,
        "stock" => $prod_stock,
        "url_image_principal" => $prod_url_image_principal,
        "url_image_secondary" => $prod_url_image_secondary
      );
    }
    echo json_encode($product_item);
  } else {
    http_response_code(404);
    echo json_encode(array("message" => "No products found."));
  }
?>
