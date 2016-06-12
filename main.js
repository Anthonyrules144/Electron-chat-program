// THIS CODE WAS TAKEN FROM THE Electron DEMO.

const electron = require('electron')
const {Menu, MenuItem} = electron;
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

function createWindow () {
  mainWindow = new BrowserWindow({width: 1280,
      height: 720,
      resizable: false,
      frame: true,
      fullscreen: false,
      title: 'test project'
  })
  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null

  })
}

app.on('ready', function() {
    createWindow();
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
