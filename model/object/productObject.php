<?php
	class Product{
		private $conn;
		private $tableName = 'product';

		public $id;
		public $date;
		public $description_sm;
		public $description_lg;
		public $name;
		public $price;
		public $stock;
		public $url_image_principal;
		public $url_image_secondary;

		public function __construct($db) {
			$this->conn = $db;
		}

		function read_top_x($cant){
			$query = "select" .
				" p.prod_id, p.prod_name, p.prod_price, i.imag_url prod_url_image_principal, ii.imag_url prod_url_image_secondary" .
				" from" .
				" " . $this->tableName . " p " .
		    " join image i on p.prod_image_principal = i.imag_id" .
		    " join image ii on p.prod_image_secondary = ii.imag_id" .
				" order by p.prod_date" .
				" limit " . $cant;
			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}

		function read_detail($id){
			$query = "select" .
				" p.prod_date, p.prod_description_lg, p.prod_description_sm, p.prod_name, p.prod_price, p.prod_stock, i.imag_url prod_url_image_principal, ii.imag_url prod_url_image_secondary " .
				" from" .
				" " . $this->tableName . " p " .
				" join image i on p.prod_image_principal = i.imag_id" .
				" join image ii on p.prod_image_secondary = ii.imag_id" .
				" where p.prod_id = " . $id;
			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}
	}
?>
