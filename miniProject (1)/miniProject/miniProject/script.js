var Grade = document.getElementById("grade");
var bg = document.querySelector(".bg-ticker-container");
function getGrade() {
    var grade = parseInt(window.prompt("Enter a Grade"));
    Grade.style.fontSize = "25px";
    Grade.style.fontWeight = "bold";
    var gradeLetter = "";
    var gradeColor = "";
    var bgColor = "#060d1a"; 
    var tickerLetter = "";
    if (grade < 50) {
        gradeLetter = "F";
        gradeColor = "#ff6b6b"; 
        bgColor = "#2c1f1f";
        tickerLetter = "F";
    } else if (grade >=50&&grade<60) {
        gradeLetter = "D";
        gradeColor = "#ffa94d";
        bgColor = "#2c241f"; 
        tickerLetter = "D";
    } else if (grade>=60&& grade<65) {
        gradeLetter = "D+";
        gradeColor = "#ffb74d";
        bgColor = "#2c261f";
        tickerLetter = "D+";
    } else if (grade>=65 && grade<70) {
        gradeLetter = "C";
        gradeColor = "#ffe066"; 
        bgColor = "#2c2c1f";
        tickerLetter = "C";
    } else if (grade>=70&& grade<75) {
        gradeLetter = "C+";
        gradeColor = "#fff176"; 
        bgColor = "#2c2e1f";
        tickerLetter = "C+";
    } else if (grade>=75&& grade<80) {
        gradeLetter = "B";
        gradeColor = "#6bc1ff"; 
        bgColor = "#1f2c3e";
        tickerLetter = "B";
    } else if (grade>=80&&grade<85) {
        gradeLetter = "B+";
        gradeColor = "#4da6ff";
        bgColor = "#1f2c4a";
        tickerLetter = "B+";
    } else if (grade>=85&&grade<90) {
        gradeLetter = "A";
        gradeColor = "#66ff99"; 
        bgColor = "#1f3e2c";
        tickerLetter = "A";
    } else if(grade>=90&&grade<=100) {
        gradeLetter = "A+";
        gradeColor = "#33ff77";
        bgColor = "#1f4a2c";
        tickerLetter = "A+";
    }
    Grade.innerHTML = gradeLetter;
    Grade.style.color = gradeColor;
    bg.style.background = bgColor;
    document.querySelectorAll(".ticker-column").forEach(column => {
        column.innerHTML = "";
        for (let i = 0; i < 50; i++) {
            let span = document.createElement("span");
            span.innerHTML = tickerLetter;
            span.style.color = gradeColor;
            column.appendChild(span);
        }
    });
}

