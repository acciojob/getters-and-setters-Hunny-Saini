//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	get getName(){
		return this.name
	}

	set setName(age){
		this.age = age;
	}
}

class Student extends Person {
	study(){
		return `${name} is studying`;
	}
}

class Teacher extends Person {
	teach() {
		return `${name} is teaching`;
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
