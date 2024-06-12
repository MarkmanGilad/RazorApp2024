
var person = {
    firstName: "Gilad",
    lastName: "Markman",
    year: 1968,
    city: "Rehovot",
    student: true,
    Age: function () {
        //return 2021 - this.year;
        var today = new Date();
        var currentYear = today.getFullYear();
        return currentYear - this.year;
    }   
};

function Person(first,last) {

    this.firstName = first;
    this.lastName = last;
    this.year = 1900;
    this.city = "";
    this.student = null;
    this.Age = function () {
        var today = new Date();
        return today.getFullYear() - this.year;
    }
} 

function person_click() {

    document.getElementById("firstName").value = person.firstName;
    document.getElementById("lastName").value = person.lastName;
    document.getElementById("year").value = person.year;
    document.getElementById("city").value = person.city;
    document.getElementById("student").checked = person.student;
}

function Get() {
    
    person.firstName = document.getElementById("firstName").value;
    person.lastName = document.getElementById("lastName").value;
    person.year = document.getElementById("year").value;
    person.city = document.getElementById("city").value;
    person.student = document.getElementById("student").checked;

    var msgBox = document.getElementById("myDiv")
    msgBox.innerText = person.firstName + " " + person.lastName;
    msgBox.innerHtml += "<br/>";
    msgBox.innerText += JSON.stringify(person);
}

function Age() {
    document.getElementById("myDiv").innerText = person.Age();
}

function Constructor() {

    var person2 = person;
    person2.firstName = "Menny";
    var div = document.getElementById("myDiv");
    div.innerHTML = person.year; //person2.firstName + "<br /> " + person.firstName;
    
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var year = document.getElementById("year").value;
    var city = document.getElementById("city").value;
    var student = document.getElementById("student").checked;

    person1 = new Person(first, last, year, city, student);
    person2 = new Person("Yael", "Levi", "", "", "");
    document.getElementById("myDiv").innerHTML = person1.firstName + "<br /> " + person.firstName;

    var student1 = new Person("Noa", "Levy");
    //student1.firstName = "Noa";
    //student1.lastName = "Levy";

    var student2 = new Person();
    student2.firstName = "Gali";
    student2.lastName = "Ron";

    var student3 = student2;
    student3.firstName = "Gilad";

    document.getElementById("myDiv").innerHTML
}
