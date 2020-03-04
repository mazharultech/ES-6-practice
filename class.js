class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "BaraHar High School & College";
    }
}
const student1 = new Student(807064, "Tareq Rahman Khan");
const student2 = new Student(129056, "Md. Sabbir Hossain Khan");
const student3 = new Student(3509095, "Mazharul Islam")
console.log(student1, student2);
console.log(student3);