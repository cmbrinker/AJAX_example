var button = document.getElementById('btn');
var bookDiv = document.getElementById('book-info');

button.addEventListener('click', function() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://learnwebcode.github.io/json-example/animals-2.json');
  request.onload = function() {
    var bookData = JSON.parse(ourRequest.responseText);
    renderHTML(bookData);
  };
  request.send();
});

function renderHTML(data) {
  var string = "";

  for(i=0; i<data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
  }

  bookDiv.insertAdjacentHTML('beforeend', string)
}
