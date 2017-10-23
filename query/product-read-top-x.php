<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  include_once '../model/config/conn.php';
  include_once '../model/object/productObject.php';

  $cant = $_GET['cantProd'];

  $database = new Database();$db = $database->getConnection();
  $product = new Product($db);
  $stmt = $product->read_top_x($cant);
  $num = $stmt->rowCount();

  if ($num>0) {
    $product_arr = array();
    $product_arr["productList"]=array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $product_item = array(
        "id" => $prod_id,
        "name" => $prod_name,
        "description_sm" => $prod_description_sm,
        "price" => $prod_price,
        "url_image_principal" => $prod_url_image_principal,
        "url_image_secondary" => $prod_url_image_secondary
      );

      array_push($product_arr["productList"], $product_item);
    }

    echo json_encode($product_arr);
  } else {
    echo json_encode(array("message" => "No products found."));
  }
?>
