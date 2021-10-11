const { parentPort } = require('worker_threads')

parentPort.on('message', (data) => {
  let increment = 0
  while (increment !== Math.pow(data, 10)) {
    increment++
  }
  const message = 'La tache CPU intensive est terminee ! Le resultat est : ' + increment
  // const message = 'La tache CPU intensive est terminee ! Le resultat est : '
  parentPort.postMessage(message)
})
