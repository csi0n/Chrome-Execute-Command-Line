function queryCurrentTab() {
    chrome.tabs.query({'active':true,'lastFocusedWindow':true},function (tabs) {
       var url=tabs[0].url; 
       console.log(url);
    });
}
document.getElementById('test').addEventListener('click',queryCurrentTab);