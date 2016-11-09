'use strict'

const {app, BrowserWindow} = require('electron')
const path = require('path')
// const asar = require('asar')

// var term_path = path.join(__dirname, 'node_modules', 'vendor', 'terminal-notifier.app', 'Contents', 'MacOS', 'terminal-notifier');
const notifier = require('node-notifier')
notifier.notify({
  title: 'My awesome title',
  message: 'Hello from node, Mr. User!',
  icon: path.join(__dirname, 'coulson.jpg'), // Absolute path (doesn't work on balloons)
  sound: true, // Only Notification Center or Windows Toasters
  wait: true // Wait with callback, until user action is taken against notification
}, function (err, response) {
  // Response is response from notification
});
// const SSH = require('simple-ssh')
// console.log(SSH)
// const ssh = new SSH({
//   host: '172.20.248.17',
//   user: 'root',
//   pass: 'kingdee',
//   timeout: 100000, // By Default 10s
//   // ,key: 'asdad'
//   // ,port: 'asdad'
//   // ,key: 'asdad'
//   // ,key: 'asdad'
//   // ,baseDir: '/' // Base directory. If this is set, each command will be preceeded by cd ${this.baseDir}
//   // ,agent
//   // ,agentForward
// });


let mainWindow
let config = {}

if (process.env.NODE_ENV === 'development') {
  config = require('../config')
  config.url = `http://localhost:${config.port}`
} else {
  config.devtron = false
  config.url = `file://${__dirname}/dist/index.html`
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  mainWindow.loadURL(config.url)

  if (process.env.NODE_ENV === 'development') {
    BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))

    let installExtension = require('electron-devtools-installer')

    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then((name) => mainWindow.webContents.openDevTools())
      .catch((err) => console.log('An error occurred: ', err))
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  console.log('mainWindow opened')
  // ssh
  //   .exec('echo $PATH', {
  //     out: function(stdout) {
  //       console.log(stdout);
  //     }
  //   })
  //   .exec('exit',{
  //     args: [1],
  //     out(stdout) {
  //       console.log('test args & out')
  //       console.log(stdout)
  //     }
  //   })
  //   .exec('this-does-not-exist', {
  //     err: function(stderr) {
  //       console.log(stderr); // this-does-not-exist: command not found
  //     }
  //   })
  //   .on('ready', () => {
  //     console.log('SSH READY')
  //   })
  //   .on('error', err => {
  //     console.log('ssh server error')
  //     console.log(err)
  //     ssh.end()
  //     console.log('SSH END!')
  //   })
  //   .start();
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
