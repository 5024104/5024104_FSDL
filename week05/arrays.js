function showArray() {

    let subjects = ["HTML", "CSS", "JavaScript", "Bootstrap"];

    let text = "Subjects: ";

    for (let i = 0; i < subjects.length; i++) {
        text += subjects[i] + " ";
    }

    document.getElementById("output").innerHTML +=
        "<br>" + text;
}