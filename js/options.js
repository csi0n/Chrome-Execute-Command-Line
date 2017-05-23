var background = chrome.extension.getBackgroundPage();
var saveOptions = document.getElementById('saveOptions');
var addNewCommandLine = document.getElementById('addNewCommandLine');
var newCommandLine = document.getElementById('new-command-lines');
if (saveOptions) {
    saveOptions.addEventListener('click', function() {
        var token = document.getElementsByName('token')[0].value,
            commandNames = document.getElementsByName('command[name][]'),
            commandValues = document.getElementsByName('command[value][]'),
            commands = [];
        if (commandNames.length === commandValues.length) {
            commandNames.forEach(function(element, index) {
                var key = element.value,
                    val = commandValues[index].value;
                if (key.length > 0 && val.length > 0) {
                    commands.push({
                        key: key,
                        value: val
                    });
                }
            }, this);
            background.saveStorage('userData', {
                token: token,
                commands: commands
            }, function() {
                alert("保存成功");
            });
            background.getObjectByKey('userData', function(data) {
                console.log(data);
            });
        }
    });
}
if (addNewCommandLine) {
    addNewCommandLine.addEventListener('click', function() {
        if (newCommandLine) {
            newCommandLine.insertAdjacentHTML('beforeend', '<label>名称</label><input type="" name="command[name][]" value=""><label>值</label><input type="" name="command[value][]" value="">');
        }
    })
}

function initCommandsAndToken() {
    background.getObjectByKey('userData', function(data) {
        if (typeof data.userData !== 'undefined') {
            document.getElementsByName('token')[0].value = data.userData.token;
            if (newCommandLine) {
                data.userData.commands.forEach(function(data, index) {
                    newCommandLine.insertAdjacentHTML('beforeend', `<label>名称</label><input type="" name="command[name][]" value="${data.key}"><label>值</label><input type="" name="command[value][]" value="${data.value}">`);
                })
            }
        }
    });
}
initCommandsAndToken();