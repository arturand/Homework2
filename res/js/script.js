$(function () {
    var user = new User(
        "Siim",
        "Anderson",
        "12.04.1997",
        "Computer Science",
        5.0);

    var users;
    users = new User("Siim", "Anderson", "12.04.1997", "Computer Science", 5.0);

    var course = new Course();
    var courses;
    courses = [
        new Course("Operation systems", "First Semester", 4.0),
        new Course("Software Engineering", "First Semester", 3.0),
        new Course("Algorithms and Data Structures", "First Semester", 5.0),
        new Course("Introduction to Data Science", "First semester", 3.0)
    ];

    init();

    //Initialization function
    function init() {

        $("#profile #name").text(user.firstname + " " + user.lastname);
        $("#profile #birthdate").text(user.birthdate);
        $("#profile #faculty").text(user.faculty);
        $("#profile #gpa").text(user.gpa);

    }
});