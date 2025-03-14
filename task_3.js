const express = require("express");
const app = express();

const fortunes = [
    "You will have a great day! 😊",
    "A surprise gift is on its way! 🎁",
    "Adventure is waiting for you! 🏕️",
    "Success is closer than you think! 🚀",
    "Happiness comes from within! 💛"
];

const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts! 😂",
    "Why did the math book look sad? Because it had too many problems. 📖",
    "Parallel lines have so much in common. It’s a shame they’ll never meet. 😆"
];

const facts = [
    "Did you know? Honey never spoils! 🍯",
    "Bananas are berries, but strawberries aren't! 🍌🍓",
    "Octopuses have three hearts! 🐙"
];

app.get("/fortune", function(req, res) {
    const fnum = Math.floor(Math.random() * fortunes.length);
    res.send(fortunes[fnum]);
});

app.get("/joke", function(req, res) {
    const jnum = Math.floor(Math.random() * jokes.length);
    res.send(jokes[jnum]);
});

app.get("/fact", function(req, res) {
    const fanum = Math.floor(Math.random() * facts.length);
    res.send(facts[fanum]);
});

app.get("/", function(req, res) {
    res.send("Hello my name is Abdallah");
});

app.listen(4444, function () {
    console.log("running ");
});
