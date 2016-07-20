(function() {
	'use strict';

	angular
		.module('recipeBox')
		.controller('ShoppingListCtrl', ShoppingListCtrl);

	ShoppingListCtrl.$inject = ['$scope'];

	function ShoppingListCtrl($scope) {
		$scope.shouldShowReorder = false;
		$scope.shoppingList = ['milk', 'juice'];
	}

})();
