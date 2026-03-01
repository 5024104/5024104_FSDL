function showDate() {

    let today = new Date();

    document.getElementById("output").innerHTML +=
        "<br>Current Date: " + today.toDateString() +
        "<br>Current Time: " + today.toLocaleTimeString();
}