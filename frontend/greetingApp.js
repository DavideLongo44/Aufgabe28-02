function submitName() {
    var userName = document.getElementById("nameInput").value;

    if (userName === "") {
        alert("bitte eine gute name:");
        return;
    }

    var Greeting = "hallo banana, "  + userName;
    updateUI(Greeting);


}
function updateUI(message) {
    document.getElementById("Greetin").textContent = message;
}
