function getCurrentTab(callback) {
    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function(tabs) {
        callback(tabs[0]);
    });
}

function saveStorage(key, obj, callback) {
    var o = {};
    o[key] = obj;
    chrome.storage.local.set(o, function() {
        if (typeof callback === 'function') {
            callback();
        }
    });
}

function getObjectByKey(key, callback) {
    chrome.storage.local.get(key, function(data) {
        if (typeof callback === 'function') {
            callback(data);
        }
    });
}

function sendMessage(str, callback) {
    wsl.send(str);
}
var wsl = 'ws://localhost:8991'
wsl = new WebSocket(wsl);
wsl.onopen = function() {};
wsl.onmessage = function(evt) {
    console.log(evt);
};