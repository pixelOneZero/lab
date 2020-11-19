let result;

function first() {
  result.innerHTML += ' first ';
}

function second() {
  setTimeout(function() {
    result.innerHTML += ' second ';
  }, 500);
}

function third() {
  result.innerHTML += ' third ';
}

function fourth() {
  result.innerHTML += ' fourth ';
}

function init() {
  result = document.getElementById('result');
  first();
  second();
  third();
  fourth();
}

window.addEventListener('DOMContentLoaded', init);