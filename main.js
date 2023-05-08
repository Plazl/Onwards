var textHistory = [];

function sendMessage() {
    var message = document.getElementById("input").value;
    textHistory.push(message);

    var textbox = document.getElementById("textbox");
    textbox.innerHTML += "<p>You: " + message + "</p>";
    textbox.scrollTop = textbox.scrollHeight;

    document.getElementById("input").value = "";
}
