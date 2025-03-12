const person = {
  
  firstName: 'Ahmed',
  
  lastName: 'Prince Oriade',
  
  age: 23,
  
  getInfo: function() {
    
	return `"First Name: ${this.firstName}, Last Name: ${this.lastName}, Age: ${this.age}"`;
  
	}

};


console.log(person.getInfo()); 