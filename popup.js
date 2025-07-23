document.getElementById("setupBtn").onclick = () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("onboarding.html") });
  };
  