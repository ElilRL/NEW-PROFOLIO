function toggleDate() {
    var demoElement = document.getElementById('demo');
    if (demoElement.innerHTML === '') {
      demoElement.innerHTML = Date();
    } else {
      demoElement.innerHTML = '';
    }
  }