<!DOCTYPE html>
<html>
<head>
	<title>Lanani - Mobile</title>

	<link rel="stylesheet" type="text/css" href="../vendor/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../vendor/font-awesome/css/font-awesome.min.css">

	<script type="text/javascript" src="../vendor/angular/angular.min.js"></script>
	<script type="text/javascript" src="../vendor/angular-ui-router/release/angular-ui-router.min.js"></script>

	<script type="text/javascript" src="index_script.js"></script>
	<script type="text/javascript" src="index_module.js"></script>
	<script type="text/javascript" src="index_config.js"></script>
	<script type="text/javascript" src="index_controller.js"></script>
</head>
<body>
	<div ng-app="MblLanani" ng-controller="mblIndexController as vm">
		<h1>{{vm.saludo}}</h1>
	</div>
</body>
</html>
