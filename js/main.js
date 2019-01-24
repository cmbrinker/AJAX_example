var request = XMLHttpRequest();

request.open('GET', 'https://learnwebcode.github.io/json-e...');
request.onload = function() {
  var bookData = ourRequest.responseText;
  console.log(bookData[0]);
};
request.send();
