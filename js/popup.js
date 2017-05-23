var background = chrome.extension.getBackgroundPage();
var buttons = document.getElementById('button');
background.getObjectByKey('userData', function(data) {
    if (typeof data.userData !== 'undefined' && buttons) {
        data.userData.commands.forEach(function(data, index) {
            buttons.insertAdjacentHTML('beforeend', `<button class="button" id="${data.key}">${data.key}</button>`);
            var temp = document.getElementById(data.key);
            if (temp) {
                temp.addEventListener('click', function() {
                    if (data.value.indexOf('$url') !== -1) {
                        background.getCurrentTab(function(tab) {
                            var value = data.value.replace(/\$url/g, tab.url);
                            background.sendMessage(value);
                        });
                    }
                });
            }
        });
    }
});
// document.getElementById('test').addEventListener('click', function() {
//     background.getCurrentTab(function(tag) {
//         background.sendMessage(`you-get -p vlc ${tag.url} --debug`);
//     });
// });