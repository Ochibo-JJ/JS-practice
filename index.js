//simple way of calculating hypotenuse of a triangle
	/*
		let base;
		let height;
		let hypotenuse;

		base = window.prompt("Enter base");
		base = Number(base);

		height = window.prompt("Enter height");
		height = Number(height);

		hypotenuse = Math.pow(base, 2) + Math.pow(height, 2);
		hypotenuse = Math.sqrt(hypotenuse);
		//alternativelt hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));

		console.log("The hypotenuse is:", hypotenuse)
	*/

//complex way of calculating hypotenuse of a triangle
	let base;
	let height;
	let hypotenuse;

	document.getElementById("submitButton").onclick = function(){
		base = document.getElementById("aLabel").value;
		base = Number(base);

		height = document.getElementById("bLabel").value;
		height = Number(height);

		hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
		document.getElementById("cLabel").innerHTML = "Hypotenuse is: " + hypotenuse;
	}

	let count = 0;
	document.getElementById("decreaseBtn").onclick = function(){
		count-=1;
		document.getElementById("countLabel").innerHTML = count;
	}
	document.getElementById("resetBtn").onclick = function(){
		count=0;
		document.getElementById("countLabel").innerHTML = count;
	}
	document.getElementById("increaseBtn").onclick = function(){
		count+=1;
		document.getElementById("countLabel").innerHTML = count;
	}
