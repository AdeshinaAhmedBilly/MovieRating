const person = {
  
	firstName: 'Billy',
  
	lastName: 'Piosson Oriade',
  
	getFullName: function() {
    
      return `${this.firstName} ${this.lastName}`;
  
	}

};


console.log(person.getFullName()); 
