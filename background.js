let stock = 'ADBE';
let price = 623;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ stock });
  chrome.storage.sync.set({price});
  console.log('Default stocks set'+ stock);
});
