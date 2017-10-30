<?php
	class Product{
		private $conn;
		private $tableName = 'product';

		public $id;
		public $name;
		public $description_sm;
		public $price;
		public $url_image_principal;
		public $url_image_secondary;

		public function __construct($db) {
			$this->conn = $db;
		}

		function read_top_x($cant){
			$query = "select p.prod_id, p.prod_name, p.prod_description_sm, p.prod_price, p.prod_url_image_principal, p.prod_url_image_secondary " .
				"from " . $this->tableName . " p " .
				"order by p.prod_date " .
				"limit " . $cant;
			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}

		function read_detail($id){
			$query = "select p.prod_name, p.prod_description_sm, p.prod_price, p.prod_url_image_principal, p.prod_url_image_secondary " .
				"from " . $this->tableName . " p " .
				"where p.prod_id = " . $id;
			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}
	}
?>
