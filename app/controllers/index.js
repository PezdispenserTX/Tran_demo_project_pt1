//For converting model
function transform(model) {
	//Press model to JSON!
	var carObject = model.toJSON();
	return {
		"title" : carObject.model + " by " + carObject.make,
		"id" : model.cid
	};
}

//E Honda
function filter(collection) {
	return colection.where({
		make : 'Honda'
	});
}

//Close event listener?
$.mainWindow.addEventListener('close', function() {
	$.destroy();
});

//redraw
$.mainWindow.addEventListener("open", function() {
	Alloy.Collections.cars.reset([{
		"make" : "Honda",
		"model" : "Civic"
	}, {
		"make" : "Honda",
		"model" : "Accord"
	}, {
		"make" : "Ford",
		"model" : "Escape"
	}, {
		"make" : "Ford",
		"model" : "Mustang"
	}, {
		"make" : "Nissan",
		"model" : "Altima"
	}]);
});

//Opening a window
$.mainWindow.open();
