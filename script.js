// Sample data 
const certificates = {
    
    "007": {
        studentName: "Prithviraj Shinde",
        courseName: "App Development",
        dateOfIssue: "2023-01-01",
        dateOfCompletion: "2023-06-01",
        studentEmail: "prithvi007@example.com"
    },
    // Add more certificates here
};

function verifyCertification() {
    const certNumber = document.getElementById("certification-number").value;
    const studentInfo = certificates[certNumber];

    if (studentInfo) {
        document.getElementById("student-name").innerText = studentInfo.studentName;
        document.getElementById("course-name").innerText = studentInfo.courseName;
        document.getElementById("date-of-issue").innerText = studentInfo.dateOfIssue;
        document.getElementById("date-of-completion").innerText = studentInfo.dateOfCompletion;
        document.getElementById("student-email").innerText = studentInfo.studentEmail;
        document.getElementById("student-information").style.display = "block";
    } else {
        alert("Certificate not found!");
    }
}
