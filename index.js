function sendSearch(selectedText) {
  const profileUrl = `http://instagram.com/${selectedText}`;
  chrome.tabs.create({url: profileUrl});
}

chrome.contextMenus.create({
  title: "Open '%s' profile on instagram.com", 
  contexts:["selection"],
  onclick: function(info, tab) {
    sendSearch(info.selectionText);
  }
});
