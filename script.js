const student = {
    name: "Sanket Patil",
    college: "RCPCOEP",
    department: "Computer Engineering"
};


// Display information

document.getElementById("name").textContent = student.name;

document.getElementById("college").textContent = student.college;

document.getElementById("department").textContent = student.department;

document.getElementById("student").textContent = student.name;


// Button functionality

const button = document.getElementById("contactButton");

const message = document.getElementById("message");

button.addEventListener("click", function () {

    message.textContent =
        "Welcome to Sanket Patil's profile! 🚀";

    button.textContent = "Profile Viewed ✓";

});
