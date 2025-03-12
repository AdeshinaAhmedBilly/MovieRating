let numberOne = 10;
let numberTwo = 2;

function createCalculator(numOne, numTwo){
 return{
	add: function(){
		return numOne + numTwo
		},
	
	subtract: function(){
		return numOne - numTwo
		},
	multiply: function(){
		return numOne * numTwo
		
		}
	}
									
}


let result = createCalculator(numberOne, numberTwo);
console.log(result.add())
console.log(result.subtract())
console.log(result.multiply())