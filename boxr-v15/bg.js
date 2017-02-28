var toggle = false;
var state = false;
console.log('bg.js loaded');

// chrome.tabs.executeScript(tab.id, {file:"jquery.js"});
// chrome.tabs.executeScript(tab.id, {file:"contentScript.js"});

chrome.browserAction.onClicked.addListener(function(tab) {
console.log('browserIconClicked');
 
  if (state == false) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {state: "false"});
    });

    chrome.browserAction.setIcon({path: "on.png", tabId:tab.id});

    state = true;

  } else {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {state: "true"});
    });

    chrome.browserAction.setIcon({path: "off.png", tabId:tab.id});

    state = false;
  } 

  chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    // chrome.browserAction.setIcon({path: "off.png", tabId:tab.id});
    state = false;
  });

});