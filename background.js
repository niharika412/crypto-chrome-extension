let stock = 'ADBE';
let price = '623';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ stock });
  chrome.storage.local.set({price});
  console.log('Default stocks set'+ stock);
});
