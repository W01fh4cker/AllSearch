const { app, BrowserWindow } = require("electron")
const {Menu} = require('electron');  // 引入 Menu 模块
Menu.setApplicationMenu(null);
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 780,
        // webPreferences: {
        //     nodeIntegration: true,
        //     contextIsolation: false
        //     preload: path.resolve(__dirname, "./preload.js")
        // }
    })
    win.loadURL("http://127.0.0.1:5173")
    win.webContents.openDevTools()
}
app.whenReady().then(createWindow)