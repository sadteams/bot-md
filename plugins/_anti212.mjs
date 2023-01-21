import { db } from '../system/database.js'
let handler = m => m
handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	db.data.users[m.sender].banned = true
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	db.data.users[m.sender].banned = true
   }
 }

export default handler

