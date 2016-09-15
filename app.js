(function(){
	var app = angular.module('LunchCheck', []);
	var LunchCheckController = function ($scope) {
			var r = new RegExp(/^\s*([\w\s]+)\s*$/);
			$scope.message = '';
			$scope.items = [];
			$scope.itemsStr = '';
			//$scope.isOk = false;

			$scope.checkItems = function (itemsString) {
				var items = [];
				if (/^\s*$/.test(itemsString)) {
					$scope.message = "Please enter data first";
					$scope.isOk = false;
				} else {
					$scope.items = itemsString.split(",")
						.filter(function (i) {
							return !(/^\s*$/.test(i));
						})
						.map(function (i) {
							var res = r.exec(i);
							return res && res[1];
						});
					if ($scope.items && $scope.items.length <= 3) {
						$scope.message = "Enjoy!";
					} else {
						$scope.message = "Too much!";
					}
					$scope.isOk = true;
				}

			};
		};
	LunchCheckController.$inject = ['$scope'];
	app.controller('LunchCheckController', LunchCheckController);
}());
