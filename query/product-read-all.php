<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  include_once '../model/config/conn.php';
  include_once '../model/object/productObject.php';

  $database = new Database();$db = $database->getConnection();
  $product = new Product($db);
  $stmt = $product->read_all();
  $num = $stmt->rowCount();

  if ($num>0) {
    $product_arr = array();
    $product_arr["productList"]=array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $product_item = array(
        "id" => $prod_id,
        "name" => $prod_name,
        "description" => $prod_description,
        "price" => $prod_price,
        "imag_src" => $prod_imag_src,
        "imag_bkg" => $prod_imag_bkg
      );

      array_push($product_arr["productList"], $product_item);
    }

    echo json_encode($product_arr);
  } else {
    echo json_encode(array("message" => "No products found."));
  }
?>
