/*
    TEMPORARY DATABASE DATA

    Later this will come from Firebase / Firestore
    or your backend API.
*/

const attendanceData = {

    student: {
        name: "Student"
    },

    subjects: {

        mathematics: {

            name: "Mathematics",
            code: "MAT101",
            faculty: "Dr. Sharma",
            credits: 4,

            present: 42,
            total: 48,

            history: [
                {
                    date: "07 Oct 2026",
                    day: "Wednesday",
                    status: "Present"
                },
                {
                    date: "06 Oct 2026",
                    day: "Tuesday",
                    status: "Present"
                },
                {
                    date: "05 Oct 2026",
                    day: "Monday",
                    status: "Absent"
                },
                {
                    date: "03 Oct 2026",
                    day: "Saturday",
                    status: "Present"
                }
            ]

        },


        physics: {

            name: "Engineering Physics",
            code: "PHY101",
            faculty: "Dr. Verma",
            credits: 4,

            present: 38,
            total: 45,

            history: [
                {
                    date: "07 Oct 2026",
                    day: "Wednesday",
                    status: "Present"
                },
                {
                    date: "06 Oct 2026",
                    day: "Tuesday",
                    status: "Absent"
                },
                {
                    date: "04 Oct 2026",
                    day: "Sunday",
                    status: "Present"
                },
                {
                    date: "03 Oct 2026",
                    day: "Saturday",
                    status: "Present"
                }
            ]

        },


        programming: {

            name: "Programming in C",
            code: "CSE101",
            faculty: "Prof. Singh",
            credits: 4,

            present: 44,
            total: 47,

            history: [
                {
                    date: "07 Oct 2026",
                    day: "Wednesday",
                    status: "Present"
                },
                {
                    date: "06 Oct 2026",
                    day: "Tuesday",
                    status: "Present"
                },
                {
                    date: "05 Oct 2026",
                    day: "Monday",
                    status: "Present"
                },
                {
                    date: "03 Oct 2026",
                    day: "Saturday",
                    status: "Absent"
                }
            ]

        },


        electrical: {

            name: "Electrical Engineering",
            code: "EEE101",
            faculty: "Dr. Kumar",
            credits: 4,

            present: 31,
            total: 42,

            history: [
                {
                    date: "07 Oct 2026",
                    day: "Wednesday",
                    status: "Absent"
                },
                {
                    date: "06 Oct 2026",
                    day: "Tuesday",
                    status: "Present"
                },
                {
                    date: "05 Oct 2026",
                    day: "Monday",
                    status: "Absent"
                },
                {
                    date: "03 Oct 2026",
                    day: "Saturday",
                    status: "Present"
                }
            ]

        }

    }

};



/* ELEMENTS */

const subjectSelect =
    document.getElementById("subject-select");

const emptyState =
    document.getElementById("empty-state");

const attendanceContent =
    document.getElementById("attendance-content");



/* PROFILE */

document.getElementById("profile-name").textContent =
    attendanceData.student.name;

document.getElementById("profile-avatar").textContent =
    attendanceData.student.name
        .charAt(0)
        .toUpperCase();



/* POPULATE SUBJECT DROPDOWN */

Object.keys(attendanceData.subjects).forEach(subjectId => {

    const subject =
        attendanceData.subjects[subjectId];

    const option =
        document.createElement("option");

    option.value = subjectId;

    option.textContent = subject.name;

    subjectSelect.appendChild(option);

});



/* SUBJECT SELECTION */

subjectSelect.addEventListener("change", () => {

    const subjectId =
        subjectSelect.value;

    const subject =
        attendanceData.subjects[subjectId];

    if (!subject) {
        return;
    }


    displayAttendance(subject);

});



/* DISPLAY ATTENDANCE */

function displayAttendance(subject) {

    emptyState.style.display = "none";

    attendanceContent.style.display = "block";


    /* CALCULATE PERCENTAGE */

    const percentage =
        (subject.present / subject.total) * 100;

    const roundedPercentage =
        percentage.toFixed(1);


    /* SUMMARY */

    document.getElementById(
        "attendance-percentage"
    ).textContent =
        roundedPercentage + "%";


    document.getElementById(
        "classes-present"
    ).textContent =
        subject.present;


    document.getElementById(
        "classes-total"
    ).textContent =
        subject.total;


    document.getElementById(
        "classes-absent"
    ).textContent =
        subject.total - subject.present;


    /* PROGRESS BAR */

    document.getElementById(
        "attendance-progress"
    ).style.width =
        Math.min(percentage, 100) + "%";


    /* STATUS */

    const status =
        document.getElementById(
            "attendance-status"
        );


    const message =
        document.getElementById(
            "attendance-message"
        );


    if (percentage >= 75) {

        status.textContent =
            "Good standing";

        status.style.background =
            "#dcfce7";

        status.style.color =
            "#16a34a";

        message.textContent =
            "Your attendance is currently above the minimum requirement.";

    }

    else {

        status.textContent =
            "Needs attention";

        status.style.background =
            "#fee2e2";

        status.style.color =
            "#ef4444";

        message.textContent =
            "Your attendance is below the recommended level.";

    }



    /* SUBJECT DETAILS */

    document.getElementById(
        "subject-name"
    ).textContent =
        subject.name;


    document.getElementById(
        "faculty-name"
    ).textContent =
        subject.faculty;


    document.getElementById(
        "subject-code"
    ).textContent =
        subject.code;


    document.getElementById(
        "subject-credits"
    ).textContent =
        subject.credits;



    /* ATTENDANCE ADVICE */

    const adviceTitle =
        document.getElementById(
            "advice-title"
        );

    const adviceText =
        document.getElementById(
            "advice-text"
        );


    if (percentage >= 85) {

        adviceTitle.textContent =
            "You're doing well.";

        adviceText.textContent =
            "Your attendance is comfortably above the minimum requirement. Keep maintaining this consistency.";

    }

    else if (percentage >= 75) {

        adviceTitle.textContent =
            "Attendance is okay.";

        adviceText.textContent =
            "You are above the minimum requirement, but maintaining regular attendance is recommended.";

    }

    else {

        adviceTitle.textContent =
            "Attendance needs attention.";

        adviceText.textContent =
            "Try to attend upcoming classes regularly to improve your attendance percentage.";

    }



    /* HISTORY */

    const historyTable =
        document.getElementById(
            "attendance-history"
        );


    historyTable.innerHTML = "";


    subject.history.forEach(record => {

        const row =
            document.createElement("tr");


        const statusClass =
            record.status.toLowerCase();


        row.innerHTML = `

            <td>
                ${record.date}
            </td>

            <td>
                ${record.day}
            </td>

            <td>
                <span class="status ${statusClass}">
                    ${record.status}
                </span>
            </td>

        `;


        historyTable.appendChild(row);

    });

}