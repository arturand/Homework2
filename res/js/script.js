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
        $("#profile #gpa").html("<strong>" + user.gpa + "</strong>");

        //Loop through array of courses
        for (let i = 0; i < courses.length; i++) {
            //Create empty tr item tag
            let tr = $("<tr></tr>");
            //Create td tag with number
            let td1 = $('<td></td>').text(i + 1);
            //Create td tag with course name
            let td2 = $('<td></td>').text(courses[i].title);
            //Create td tag with semester
            let td3 = $('<td></td>').text(courses[i].semester);
            //Create td tag with grade
            let td4 = $('<td></td>').text(courses[i].grade);

            //Add all td tags to tr
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);

            //Append tr tag to tbody element inside and element with courses-container
            $('#courses-container tbody').append(tr)
        }

        //Profile button logic
        //When clicked removes pill and tab classes from #profile-button and adds pill active and tab active classes
        //And removes pill active and tab active classes from #courses-button and adds pill and tab classes
        $("#profile-button").click(function () {
            $("#profile-button").removeClass("pill").addClass("pill active");
            $("#courses-button").removeClass("pill active").addClass("pill");

            $("#profile-container").removeClass("tab").addClass("tab active");
            $("#courses-container").removeClass("tab active").addClass("tab");
        });

        //Courses button logic
        //When clicked removes pill and tab class from #courses-button and adds pill active and tab active classes
        //And removes pill active and tab active class from #profile-button and adds pill and tab classes
        $("#courses-button").click(function () {
            $("#courses-button").removeClass("pill").addClass("pill active");
            $("#profile-button").removeClass("pill active").addClass("pill");

            $("#courses-container").removeClass("tab").addClass("tab active");
            $("#profile-container").removeClass("tab active").addClass("tab");
        });

        //Toggles between dispaly: show and display: none, show/hide add course fields
        $("#add-course-button").click(function () {
            $('#add-course').toggle()
        });
    }
});