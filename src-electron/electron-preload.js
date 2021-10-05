/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 */

import { contextBridge, ipcRenderer } from 'electron'
contextBridge.exposeInMainWorld('ipcRenderer', {
  send (channel, name, date, number) {
    ipcRenderer.send(channel, name, date, number)
  },
  on (channel, name, date, number) {
    ipcRenderer.on(channel, name, date, number)
  }
})
