const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables for Elite md]════════\\
global.owner = process.env.OWNER_NUMBER || '94775686166'
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Jithula:Jithula@cluster0.i9f4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'Eboxsrilanka2009@gmail.com'
global.github = 'https://github.com/bit-x-tm/elite-md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/ebox@nt' // add your username
global.sudo = process.env.SUDO || '2347039570336,2348050907760'
global.devs = '2347039570336,2348050907760';
global.website = 'http://www.ebox.free.nf/?i=1' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ad72b729bc880fa0d13f3.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;; eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhiK1dqUnBRVFhrMkgrdnhiVFpyWmU2QlF4OFRHYytWNEZQRE5lOGFFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHFUNWdyTFlXQTFvWUJXUjJadlZ2MC8way9pZ0RTL2ZYVGhSYXhQZWxYVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR0ZYbWhEVjFJZlNGb01Zc2ljSDVSZFNrbytZckZNOVYySXN4WUl5Tmw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzblhBSlBoSWlZZmZ5c1ZsREhZVHpSZjJ1UVh3RlBpekRhMStiN0x4dUVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBUndpTjMydWRCeHlKY1hoTmFFRTdtYjMwUVFnakdJQ0NMV0VIVG4zRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldTdzQxak1iYy85b2J3V3Q0eFVTbXhUZFp0cERmVExNWlArLys2cEpZQUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdNTlhGWGZpRGFkMlRxTHVjbnZodjBsUTgzdWJmeDhWVktNZnl0UEZYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGxTVlNrc0Q3WTg2eGtJQ08zV3dsbjBtZkx2Z3QxWkY4Q3lpSFkxSzBqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNmWjBUVWdsS0RaVEVqSXZZZDBlMjh1cGc2THpSbndzclZYN29CT2FWSko2YlMvMVNLeW1zZjJqYVJiZCs1UUpBcUp4cFE3Ui9rSjZJVFZpYUQrWkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJ0bTlsVEJidDFRNlcyOHF2bjNtTWs5cFhZMytTVXpVWmdYdm53YkU1K0g0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwOUc3b3pTY1J3Q2wwSWRqVVpFc1JBIiwicGhvbmVJZCI6IjU1ODIzMmQ2LWVkMTEtNDFiZS04ZjU0LTczNDY2Y2QxY2JmYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdU93bENZNkZ6alFwR0JvWHpLZ3c2STFoQVU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4vNlZCN2NwSXN4WVBVSnQySWFuYzFYNzFEbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05HbDNPWUJFTldxNmJZR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZyMytuRXRKTEUrNlJJYWZRdFZjdmN2TlBjR1NGUVRlcnhKMzBiZzBheVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVqZE9Jb04zM1ZITVM5Tk5FQkl0RlNIOS9mMWRKdEkxblBJd29BcU41S3hmYzZUNllwZkZudWpqNWdVTXAvZDJpZmluUkJ0TitrMDR1a1JSTFcrOER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqUDVBVmFhRHI0eXJkejFjK3E5UTdqQ3FwWkFoRU1VU0tIVVA4MGM2TUFyR0gxMEpsMVVBRENmT3diMzdockU4UmxhWkppdVBUOG5IWWQ4NjhhZFNDZz09In0sIm1lIjp7ImlkIjoiOTQ3NzU2ODYxNjY6NTlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzU2ODYxNjY6NTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmE5L3B4TFNTeFB1a1NHbjBMVlhMM0x6VDNCa2hVRTNxOFNkOUc0TkdzayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTU4NDcyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGOVcifQ==",
  botname:   process.env.BOT_NAME === undefined ? 'Elite BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Nethindu ' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'No name' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'ELITE-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? false : process.env.STATUS_SENDER,
anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'Elite',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
