(function(){
	var app = angular.module('ShoppingListCheckOff', []);
	var ToBuyShoppingController = function ($scope, ShoppingListCheckOffService) {
		$scope.buyList = ShoppingListCheckOffService.buyList;

		$scope.buyThis = function (item) {
			var itemIndex = $scope.buyList.indexOf(item, 0);
			if (itemIndex !== -1) {
				$scope.buyList.splice(itemIndex,1);
				ShoppingListCheckOffService.boughtList.push(item);
			}
		};

	};
	var AlreadyBoughtShoppingController = function ($scope, ShoppingListCheckOffService) {		
		$scope.boughtList = ShoppingListCheckOffService.boughtList;
		$scope.isEmptyBuyList = function () {
			return ShoppingListCheckOffService.buyList.length ? false : true;
		};
	};
	var ShoppingListCheckOffService = function () {
		var buy = [
			{ name: 'Banana', quantity: 10 },
			{ name: 'Apple', quantity: 3 },
			{ name: 'Peach', quantity: 5 },
			{ name: 'Eggs', quantity: 7 },
			{ name: 'Milk', quantity: 2 },
			{ name: 'Sugar', quantity: 1 },
			{ name: 'Cola', quantity: 2 },
			{ name: 'Holy water', quantity: 1 },
			{ name: 'Pizza', quantity: 1 },
			{ name: 'Fork', quantity: 4 }
		];
		var bought = [];

		return {
			buyList: buy,
			boughtList: bought,
			moveToBought: function (item) {
				return;
			}
		};
	};
	ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	app.controller('ToBuyShoppingController', ToBuyShoppingController);
	app.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);

	app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
}());
