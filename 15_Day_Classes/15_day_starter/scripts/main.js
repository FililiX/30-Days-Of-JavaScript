
class Person {
	constructor(firstName="Default", lastName="Default", age=18) {

		// setting values in the constructor
		this.firstName = firstName
		this.lastName = lastName

		let _age = age
		this.setAge = function(age) {_age = age; }
		this.getAge = function() {return _age; }


		// these are properties
		this.score = 0
		this.skills = [] 
	}

	// Method
	getFullName(){
		const fullName = this.firstName + " " + this.lastName
		return fullName
	}


	// Static (class) method
	static favoriteSkill(){
		const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
		const index = Math.floor(Math.random()*skills.length)
		return skills[index]
	}


}

const person1 = new Person("Filipek", "Rakoczy",22)
const person2 = new Person("Dilda", "koks",50)

person2.setAge(10)
const person3 = new Person()


console.log(person1)
console.log(person2.getAge())
console.log(person3)
console.log(person2.getFullName())
console.log(person1.skills)
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'
console.log(person2.skills)

console.log(Person.favoriteSkill()) // this is a class 




class Student extends Person{
	saySomething(){
		console.log("Student is a child of Person")
	}
}

const stud1 = new Student("First","Last",20)
console.log(stud1)
console.log(stud1.saySomething())
console.log(stud1.getFullName())

















