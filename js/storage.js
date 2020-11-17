/*
Things to consider:
The storage event occurs for other open tabs/sessions, not the focused tab.

*/

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function logThis(e) {
  console.log(`key: ${e.key}`);
  console.log(`oldValue: ${e.oldValue}`);
  console.log(`newValue: ${e.newValue}`);
  console.log(`url: ${e.url}`);
  console.log(`storageArea: ${JSON.stringify(e.storageArea)}`);
}

window.addEventListener('storage', function(e) {
    logThis(e);
    // todo: don't set sessionStorage for every localStorage storage event. fig-
    // gure out how to differentiate the values intended for sessionStorage
    if (e.newValue !== null) {
        window.sessionStorage.setItem(e.key, e.newValue);
        window.localStorage.removeItem(e.key);
    }
});

window.addEventListener('DOMContentLoaded', function() {
  var setLocalLink = document.querySelector('#setLocalStorage');
  setLocalLink.addEventListener('click', function(e) {
      e.preventDefault();
      var param1Value = getUrlParameter('param1');
      window.localStorage.setItem('param1', param1Value);
  });
});