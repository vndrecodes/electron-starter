const {ipcMain} = require("electron");


function register() {
  ipcMain.on('unidirectional:channel', handleSend);
  ipcMain.handle('bidirectional:channel', handleInvoke);
}

function handleSend(event, msg) {
    console.log(msg);
}

function handleInvoke(event, msg) {
  return msg.toUpperCase();
}


module.exports = {
  registerIpcHandlers: register
};
