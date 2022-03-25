const { app, BrowserWindow } = require('electron');


function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 1200
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();
}


app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
