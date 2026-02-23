function processNumber() {

    // Getting input (Event handling)
    number = parseInt(document.getElementById("numInput").value);

    // Operator
    sum = number + 10;

    // Condition
    if (number % 2 === 0) {
        resultMessage = "Number is Even";
    } else {
        resultMessage = "Number is Odd";
    }

    // Loop
    let loopOutput = "";
    for (let i = 1; i <= 5; i++) {
        loopOutput += i + " ";
    }

    document.getElementById("output").innerHTML =
        resultMessage +
        "<br>Sum (Number + 10): " + sum +
        "<br>Loop Output: " + loopOutput;
}