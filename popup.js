document.getElementById("saveBtn").addEventListener("click", () => {
  const gifUrl = document.getElementById("gifUrl").value;
  if (gifUrl) {
    chrome.storage.sync.set({ gifUrl: gifUrl }, () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { gifUrl: gifUrl });
      });
    });
  }
});

document.getElementById("defaultBtn").addEventListener("click", () => {
  const defaultUrl =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmF5aG9jM2QwOHFxaTc3NzFtZ2ZkdDJuZGNhZzQ3aXJrMWlqbzFkNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UQ1EI1ML2ABQdbebup/giphy.gif";
  chrome.storage.sync.set({ gifUrl: defaultUrl }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { gifUrl: defaultUrl });
    });
  });
});

// Load saved URL into input
chrome.storage.sync.get(["gifUrl"], (result) => {
  if (result.gifUrl) {
    document.getElementById("gifUrl").value = result.gifUrl;
  }
});
