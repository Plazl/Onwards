var textHistory = [];

function sendMessage() {
    var message = document.getElementById("input").value;
    textHistory.push(message);

    var textbox = document.getElementById("textbox");
    textbox.innerHTML += "<p>You: " + message + "</p>";
    textbox.scrollTop = textbox.scrollHeight;

    document.getElementById("input").value = "";
}
function showTextHistory() {
  var textHistory = "Once upon a time, in a land far, far away, there lived a brave knight named Sir Percival. He embarked on a grand quest to rescue a captured princess from the clutches of an evil dragon. With his trusty sword and shield, Sir Percival journeyed through enchanted forests, crossed treacherous mountains, and faced numerous challenges. Along the way, he encountered friendly elves, wise wizards, and cunning trolls. After many trials and battles, Sir Percival finally reached the dragon's lair. With courage and skill, he engaged in an epic duel with the fearsome beast. After a fierce struggle, Sir Percival emerged victorious, freeing the princess and restoring peace to the kingdom. The people hailed him as a hero, and Sir Percival's name would be remembered in legends for generations to come.";
  document.getElementById("text-history").innerText = textHistory;
}
