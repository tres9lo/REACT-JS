// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev'); // Check if the app is in development

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the React app
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000' // During development
      : `file://${path.join(__dirname, 'build/index.html')}` // In production
  );

  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
