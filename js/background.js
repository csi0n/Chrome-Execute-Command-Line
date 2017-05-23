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
var socket = checkWebSocket(wsl);
setInterval(function() {
    if (typeof socket === 'undefined' || socket.readyState === 3) {
        var wsl = 'ws://localhost:8991'
        socket = checkWebSocket(wsl);
    }
}, 10000);

function checkWebSocket(url) {
    wsl = new WebSocket(url);
    wsl.onopen = function() {
        wsl.onmessage = function(evt) {
            console.log(evt);
        };
        wsl.onerror = function(evt) {
            console.log(evt);
        };
    };
    return wsl;
}