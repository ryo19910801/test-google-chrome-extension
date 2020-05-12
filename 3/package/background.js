var counter = 0;
	
chrome.browserAction.setBadgeText({text:String(counter)});

chrome.browserAction.onClicked.addListener(
    function(tab){
        counter++;
        chrome.browserAction.setBadgeText({text:String(counter)});
    }
);