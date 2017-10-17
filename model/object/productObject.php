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

		function read_all(){

			$query = "select p.prod_id, p.prod_name, p.prod_description_sm, p.prod_price, p.prod_url_image_principal, p.prod_url_image_secondary " .
				"from " . $this->tableName . " p";

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}
	}
?>
