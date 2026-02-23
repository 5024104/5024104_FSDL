class Student {

    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }

    display() {
        console.log("Student Name: " + this.name);
        console.log("Roll Number: " + this.roll);
    }
}

// Object Creation
let student1 = new Student("John", 101);
student1.display();