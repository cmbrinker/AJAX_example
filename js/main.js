var request = XMLHttpRequest();
var button = document.getElementById('btn');

request.open('GET', 'https://learnwebcode.github.io/json-e...');
request.onload = function() {
  var bookData = ourRequest.responseText;
  console.log(bookData[0]);
};
request.send();

button.addEventListener('click', function() {
  request.open('GET', 'https://learnwebcode.github.io/json-e...');
  request.onload = function() {
    var bookData = JSON.parse(ourRequest.responseText);
    renderHTML(bookData);
  };
  request.send();
});
