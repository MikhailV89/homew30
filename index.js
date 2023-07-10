function Student(lastName, firstName, yearOfBirth) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.grades = [];
    this.attendance = new Array(25).fill(null);

    this.getAgeOfStudent = function() {
        let curentYears = new Date().getFullYear();
        return curentYears - this.yearOfBirth;
    };

    this.getAverageGrade = function() {
        if (this.grades.length === 0) {
            return 0;
        }

        let sum = this.grades.reduce(function(total, grade) {
            return total + grade;
        });
        return sum / this.grades.length;
    };

    this.present = function() {
        let index = this.attendance.findIndex(function(item) {
            return item === null;
        });
        if (index !== -1) {
            this.attendance[index] = true;
        }
    };

    this.absent = function() {
        let index = this.attendance.findIndex(function(item) {
            return item === null;
        });
        if (index !== -1) {
            this.attendance[index] = false;
        }
    };

    this.resume = function() {
        let averageGrade = this.getAverageGrade();
        let attendanceRatio = this.getAttendanceRatio();
    
        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRatio > 0.9) {
            return "Добре, но ти можешь краще!!";
        } else {
            return "Редиска!";
        }
    };

    this.getAttendanceRatio = function() {
        let total = this.attendance.length;
        let presentCount = this.attendance.filter(function(item) {
            return item === true;
        }).length;
        return presentCount / total;
    };
}

let student1 = new Student("Олег", "Носуленко", 1990);
student1.grades = [90, 97, 92, 98];
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 

let student2 = new Student("Анна", "Галкiна", 2002);
student2.grades = [95, 90, 92, 88];
student2.present();
student2.absent();
student2.present();
student2.present();

let student3 = new Student("Андрiй", "Петров", 1995);
student3.grades = [75, 40, 62];
student3.present();
student3.absent();

let students = [
    student1,
    student2,
    student3
];

let html = '';

students.forEach(function(student) {
    html += `
    <ul>
        <li>Ім'я студента: <b>${student.lastName}</b></li>
        <li>Призвище студента: <b>${student.firstName}</b></li>
        <li>Вік студента: <b>${student.getAgeOfStudent()}</b></li>
        <li>Середня оцінка: <b>${student.getAverageGrade()}</b></li>
        <li>Середнє відвідування: <b>${student.getAttendanceRatio()}</b></li>
        <li>Коментар до успішності студента: <b>${student.resume()}</b></li>
    </ul>
    `;
});

document.write(html);