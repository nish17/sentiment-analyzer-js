var data;

function preload() {
  data = loadJSON("./data/AFINN-111_data.json");
}

function setup() {
  noCanvas();
  console.log(data);
  var txt = select("#main-txt-area");
  txt.input(typing);

  function typing() {
    var textInput = txt.value();
    var words = textInput.split(/\W/);
    console.log(words);
    let scoredWords = [];
    let totalScore = 0;
    for (let i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
      if (data.hasOwnProperty(word)) {
        let score = data[word];
        console.log(word, score);
        totalScore += Number(score);
        scoredWords.push(`${word} : ${score} `);
      }
    }
    let scoreP = select("#score");
    scoreP.html(`<strong>score:</strong> ${totalScore}`);
    let comp = select("#comp");
    comp.html(`<strong>comparative:</strong> ${totalScore / words.length}`);
    let wordlist = select("#wordlist");
    wordlist.html(scoredWords);
    let conclusion = select("#conclusion");
    conclusion.html(
      `<mark>Result: ${
        totalScore < 0
          ? `Negative</mark>`
          : (totalScore = 0
              ? `Neutral</mark>`
              : totalScore > 0`Positive</mark>`)
      }`
    );
  }
}

function draw() {}
