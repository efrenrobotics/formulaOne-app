let color = '#EAEFD3';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    console.log('Default background color set to %cbeige', 'color: ${color}');
});