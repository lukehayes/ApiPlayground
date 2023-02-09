

fetch('http://localhost:8000/api')
  .then((response) => response.json())

  .then(function(data)
  {
let app = document.getElementById('app');
    app.innerText = data.message
  });

