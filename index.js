// HELP

function checkAnswers() {
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    const q8 = document.querySelector('input[name="q8"]:checked');
    const q9 = document.querySelector('input[name="q9"]:checked');
    const q10 = document.querySelector('input[name="q10"]:checked');

    if (q1 && q1.value === "paris") {
        score++;
    }

    if (q2 && q2.value === "moscow") {
        score++;
    }

    if (q3 && q3.value === "riyadh") {
        score++;
    }

    if (q4 && q4.value === "rome") {
        score++;
    }

    if (q5 && q5.value === "tokyo") {
        score++;
    }

    if (q6 && q6.value === "ottawa") {
        score++;
    }

    if (q7 && q7.value === "madrid") {
        score++;
    }

    if (q8 && q8.value === "mexicocity") {
        score++;
    }

    if (q9 && q9.value === "newdelhi") {
        score++;
    }

    if (q10 && q10.value === "berlin") {
        score++;
    }

    document.getElementById("score").textContent = `Score: ${score}/10`;
}
document.getElementById("submit").onclick = checkAnswers;