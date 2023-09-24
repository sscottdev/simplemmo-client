const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // Create the browser window with fullscreen and a custom title bar.
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        fullscreen: false,
        frame: true,
        icon: process.platform === 'win32' ? path.join(__dirname, 'icons/icon.ico') : path.join(__dirname, 'icons/icon.icns'),
        title: "SimpleMMO"
    });


    win.setTitle('My Simple MMO'); // Replace with your desired application name


    // Load the website URL.
    win.loadURL('https://web.simple-mmo.com/');

    // Remove DevTools
    win.webContents.on('devtools-opened', () => {
        win.webContents.closeDevTools();
    });
}

app.on('ready', createWindow);
