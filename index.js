console.log('Starting...')

import { join, dirname } from 'path'
import cluster from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
const { say } = cfonts
import { createInterface } from 'readline'
import yargs from 'yargs'
const { default: pkg } = await import('./package.json', { assert: { type: 'json' } })
const { name, author } = pkg
const rl = createInterface(process.stdin, process.stdout)
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

say('SHANO BOT', {
  font: 'simple3d',
  align: 'center',
  gradient: ['red', 'magenta']
})
say(`© Whatsapp Bot By @${author.name || author}`, {
  font: 'console',
  align: 'center',
  colors: ['red']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  cluster.setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = cluster.fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
    let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}

start('main.js')
