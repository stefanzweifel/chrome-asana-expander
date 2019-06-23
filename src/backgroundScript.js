/**
 * Listen to Tab changes and send an extension internal event
 * to notify contentScript.js
 */
chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        chrome.tabs.sendMessage(tabId, {
            message: 'url-changed',
            url: changeInfo.url
        })
    }
);
