<?php
	class Image{
		private $conn;
		private $tableName = 'image';

		public $id;
		public $url;
		public $order;

		public function __construct($db) {
			$this->conn = $db;
		}

		function read_top_x($id, $cant){
			$query = "select" .
				" i.imag_id, i.imag_url, i.imag_order" .
				" from rel_prod_imag r inner join " .
				" " . $this->tableName . " i on r.rel_imag_id = i.imag_id " .
        " where r.rel_prod_id = " . $id .
        " limit " . $cant;
			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}
	}
?>
