function pegaIdYoutube(url) {
  var regex = /(?:youtube\.com\/watch\?v=|youtube\.com\/shorts\/)([A-Za-z0-9_-]+)/;;
  var match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

function preencherInputComURL() {
  
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var extURL = tabs[0].url;
    
      var idYoutube = pegaIdYoutube(extURL);
      var youtubeIdInput = document.getElementById('youtubeId');
    
      youtubeIdInput.value = idYoutube;
  });
}

function copiarParaAreaDeTransferencia() {
  var youtubeIdInput = document.getElementById('youtubeId');
  youtubeIdInput.select();
  document.execCommand('copy');
  
  var copyButton = document.getElementById('copyButton');
  copyButton.textContent = 'Copied!';
}

window.addEventListener('load', preencherInputComURL);

var copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copiarParaAreaDeTransferencia);
