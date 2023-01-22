chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (
    info.status === 'complete' &&
    tab.url.indexOf('https://soundcloud.com') !== -1
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      files: ['content_script.js'],
    });
  }
});