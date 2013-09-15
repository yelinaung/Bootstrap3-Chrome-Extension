chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('docs/index.html')}, function(tab) {
  // Tab opened.
  });
});