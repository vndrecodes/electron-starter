const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, msg) => ipcRenderer.send(channel, msg),
  invoke: (channel, msg) => ipcRenderer.invoke(channel, msg),
  receive: (channel, listener) => ipcRenderer.on(channel, listener)
});
