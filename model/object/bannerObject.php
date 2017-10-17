<?php
	class Banner{
		private $conn;
		private $tableName = 'banner';

		public $id;
		public $imag_src;
		public $placeholder;

		public function __construct($db) {
			$this->conn = $db;
		}

		function read_top_x($cant){

			$query = "select b.bann_id, b.bann_imag_src, b.bann_placeholder " .
				"from " . $this->tableName . " b " .
				"where b.bann_order is not null " .
				"order by b.bann_order " .
				"limit " . $cant;

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}
	}
?>
