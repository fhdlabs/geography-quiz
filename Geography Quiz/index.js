// HELP

function checkAnswers() {
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q1 && q1.value === "paris") {
        score++;
    }

    if (q2 && q2.value === "moscow") {
        score++;
    }

    if (q3 && q3.value === "riyadh") {
        score ++;
    }
    window.alert(`You got ${score}/3!`)
}
document.getElementById("submit").onclick = checkAnswers;