import { app, BrowserWindow, nativeTheme, ipcMain } from 'electron'
import path from 'path'
import { Worker } from 'worker_threads'

try {
  if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(require('path').join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) { }

let mainWindow
let window2

function createWindow () {
  // let increment = 0
  // while (increment !== Math.pow(10, 10)) {
  //   increment++
  // }
  // await worker()

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: /quasar-cli/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.setMenu(null)
  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }
  mainWindow.on('closed', () => {
    mainWindow = null
  })

  worker()
}

function second (name, date, number) {
  window2 = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })
  window2.setMenu(null)
  window2.loadURL(process.env.APP_URL + '#/book')
  window2.webContents.on('did-finish-load', () => {
    window2.webContents.send('getData', name, date, number)
  })
  window2.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('bouton', (event, name, date, number) => {
  second(name, date, number)
})

function worker () {
  const workerContents = require('fs').readFileSync(path.resolve(__dirname, 'workers.js'), { encoding: 'utf8' })
  const worker = new Worker(workerContents, { eval: true })
  worker.postMessage(10)

  worker.on('message', (data) => {
    console.log(data)
  })

  worker.on('error', (data) => {
    console.log('error ' + data)
  })

  worker.on('exit', (data) => {
    console.log('Operation terminee ' + data)
  })
}
