(() => {
  // src/sw.js
  chrome.action.onClicked.addListener(async (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./scripts/scrapping.candidates.js"]
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./scripts/scrappingLinkedin.js"]
    });
  });
})();
