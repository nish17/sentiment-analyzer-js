var table;
var afinn = {};
function preload() {
  table = loadTable("AFINN-111.txt", "tsv");
}

function setup() {
  noCanvas();
  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    var word = row.get(0);
    var score = row.get(1);
    // console.log(word, score);
    afinn[word] = score;
  }
  console.log(afinn);
  saveJSON(afinn, "AFINN-111_data.json");
}
