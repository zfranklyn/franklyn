(function(window, document, undefined) {

	window.addEventListener("click", function(e){

		var selectedVariables = document.getElementsByClassName("selected");
		var button = document.getElementById("run");

		if (e.target.parentNode.id == "menu"){
			if (selectedVariables.length<2){
				e.target.classList.toggle('selected')
			} else {
				e.target.classList.remove('selected')
			}

		selectedVariables = document.getElementsByClassName("selected");
			
		}

		if (e.target.id == "run"){
			if (selectedVariables.length==1){
				var var1 = selectedVariables[0].id;

				visualize(var1);
			} else if (selectedVariables.length==2){
				var var1 = selectedVariables[0].id,
				var2 = selectedVariables[1].id;

				visualize(var1,var2);
			}
		}
			

	});

	window.addEventListener("keydown", function(e){

		var selectedVariables = document.getElementsByClassName("selected");
		
		if (e.keyCode == 13){
			e.preventDefault();

			if (selectedVariables.length==1){
				var var1 = selectedVariables[0].id;

				visualize(var1);
			} else if (selectedVariables.length==2){
				var var1 = selectedVariables[0].id,
				var2 = selectedVariables[1].id;

				visualize(var1,var2);
			}

		}

	})




















		
		// var minData = 0,
		// 	maxData = 100;
		// var dataN = 800;

		// var normData = [];

		// getData();

// function getData() {
// 	// loop to populate data array with 
// 	// probabily - quantile pairs
// 	for (var i = 0; i < dataN; i++) {

// 		// random data gen
// 		var randomX = Math.floor(Math.random()*(maxData-minData)+minData);
// 		var randomY = Math.floor(Math.random()*(maxData-minData)+minData);

// 	    q = normal() // calc random draw from normal dist
// 	    p = gaussian(q) // calc prob of rand draw
// 	    el = {
// 	        // "x": q,
// 	        // "y": p
// 	        "xNorm": -q,
// 	        "yNorm": q,
// 	        "xRand": randomX,
// 	        "yRand": randomY
// 	    }
// 	    normData.push(el)
// 	};

// 	// from http://bl.ocks.org/mbostock/4349187
// 	// Sample from a normal distribution with mean 0, stddev 1.
// 	function normal() {
// 	    var x = 0,
// 	        y = 0,
// 	        rds, c;
// 	    do {
// 	        x = Math.random() * 2 - 1;
// 	        y = Math.random() * 2 - 1;
// 	        rds = x * x + y * y;
// 	    } while (rds == 0 || rds > 1);
// 	    c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
// 	    return x * c; // throw away extra sample y * c
// 	};

// 	//taken from Jason Davies science library
// 	// https://github.com/jasondavies/science.js/
// 	function gaussian(x) {
// 		var gaussianConstant = 1 / Math.sqrt(2 * Math.PI),
// 			mean = 0,
// 	    	sigma = 1;

// 	    x = (x - mean) / sigma;
// 	    return gaussianConstant * Math.exp(-.5 * x * x) / sigma;
// 	};

// }


})(this, this.document);