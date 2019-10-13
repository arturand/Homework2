$(function () {

    let users;
    users = new User("Siim", "Anderson", "12.04.1997", "Computer Science", 5.0);

    let courses;
    
    courses = [
        new Course("Operation systems", 1, 4.0),
        new Course("Software Engineering", 1, 3.0),
        new Course("Algorithms and Data Structures", 1, 5.0),
        new Course("Introduction to Data Science", 1, 3.0)
    ];

    let user = new User(
        "Siim",
        "Anderson",
        "12.04.1997",
        "Computer Science",
        0
    );

    init();
    function calculateGPA(){
        let gpa = 0;
        for (let i = 0; i < courses.length ; i++) {
            gpa += courses[i].grade;
        }
        gpa = gpa/courses.length;

        return (gpa * 100) / 100;
    }
    //Initialization function
    function init() {

        $("#profile #name").text(user.firstname + " " + user.lastname);
        $("#profile #birthdate").text(user.birthdate);
        $("#profile #faculty").text(user.faculty);
        $("#profile #gpa").text(calculateGPA()).wrapInner("<strong/>");
        $("#courses").empty();



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
            $('#courses').append(tr)
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
        $('#save-course').click(function(){
            courses.push(new Course($("#title").val(),$("#semester").val(),$("#grade").val()));
            $("#td2").val("");
            $("#td3").val("");
            $("#td4").val("");
            init();
            $("add-course").toggleClassh("hidden")
            $('#add-course').hide();
        });
        $("#cancel-course").click(function(){
            formClear();
            $('#add-course').hide();
        });
    }
    function addToTable(){
        const title = $('#title').val();
        const semester = $("#semester").val();
        const grade = $("#grade").val();
        
        $('#courses-container tbody').append(
            "<tr>"+
                "<td>" +courses.length+ "</td>"+
                "<td>"+title+"</td>" + 
                "<td>" + semester + "</td>" +
                "<td>" + grade + "</td>" +
            "</tr>"
        );
    };
    
    function tableUpdate(){
        if ($("#title").val() != null &&
            $("#title").val() != '') {
            addToTable();
            formClear();
    }};
    function updateGPA(){
        return calculateGPA()
    }
    function formClear() {
        $("#title").val("");
        $("#semester").val("");
        $("#grade").val("");
      };



    
});