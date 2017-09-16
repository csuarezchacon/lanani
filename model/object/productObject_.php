<?php
	class Product{
		private $conn;
		private $tableName = 'product';

		public $id;
		public $name;
		public $description;
		public $price;
		public $imag_src;
		public $imag_bkg;

		public function __construct($db) {
			$this->conn = $db;
		}

		function read_all(){
			/*$query = "
				SELECT p.prod_id, p.prod_name, p.prod_description, p.prod_price " .
				"FROM " . $this->tableName . " p ";*/

			$query = "select p.prod_id, p.prod_name, p.prod_description, p.prod_price, p.prod_imag_src, p.prod_imag_bkg " .
				"from " . $this->tableName . " p";

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}
	}
?>