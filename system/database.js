import yargs from 'yargs/yargs'
import lodash from 'lodash'
import { mongoDB } from './mongoDB.js'
import { Low, JSONFile } from 'lowdb'

const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

const db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/i.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)
//const db = new Low(new mongoDB('mongodb+srv://Kangsad01:19082004@kangsad01.4r6h4.mongodb.net/?retryWrites=true&w=majority'))

loadDatabase()

async function loadDatabase() {
  if (db.READ) return new Promise((resolve) => setInterval(function () { (!db.READ ? (clearInterval(this), resolve(db.data == null ? loadDatabase() : db.data)) : null) }, 1 * 1000))
  if (db.data !== null) return
  db.READ = true
  await db.read()
  db.READ = false
  db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(db.data || {})
  }
  db.chain = lodash.chain(db.data)
    
    return db.data
}

export { 
    db,
    opts,
    loadDatabase
}