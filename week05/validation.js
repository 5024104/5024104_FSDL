function validateForm() {

    try {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;

        if (name === "") {
            throw "Name cannot be empty";
        }

        if (age === "" || age <= 0) {
            throw "Invalid Age";
        }

        document.getElementById("output").innerHTML =
            "Validation Successful<br>";

        showArray();
        showString(name);
        showDate();

    } catch (error) {
        document.getElementById("output").innerHTML =
            "Error: " + error;
    }
}