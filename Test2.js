let numberOne = 2;

function outerFunction(numberOne){
	
	let numberTwo = 6;
	function innerFunction(innerNumber){
		let result = outerNumber + innerNumber
		return result;
	}
	return innerFunction(numberTwo)

}


console.log(outerFunction(numberOne))