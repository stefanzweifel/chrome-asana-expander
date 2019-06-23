/**
 * Find all Elemements which trigger the "expanding" in Asana
 */
function expand_content () {
    for (let link of document.getElementsByClassName('TruncatedRichText-expand')) {
        link.click();
    };

    for (let link of document.getElementsByClassName('TaskStoryFeed-expandLink')) {
        link.click();
    };
}

/**
 * Listen to internal event and trigger expand_content function
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === 'url-changed') {
            expand_content();
        }
    }
);
