function showString(name) {

    let upperName = name.toUpperCase();
    let length = name.length;

    document.getElementById("output").innerHTML +=
        "<br>Name in Uppercase: " + upperName +
        "<br>Name Length: " + length;
}