const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254769323504";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "yes"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "trur"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_56_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDk4LFxuICAgICAgICA1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkxLFxuICAgICAgICA5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICA0LFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyLFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN0dDUUVyaE1hSndMdmRjRUpoZ1pkRWhhQ2lWMUxrVzNBVVB5QkNzZlArWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieHNBN1Vna1BScmFLODJLSkE3QUZvQVwiLFxuICBcInBob25lSWRcIjogXCIwZjgwN2I0YS1hNjk0LTQzMDMtYmRkNS1hZjg0OWUyMjk1YmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgNTMsXG4gICAgICAxNTIsXG4gICAgICAyMjksXG4gICAgICA4MSxcbiAgICAgIDI1NSxcbiAgICAgIDgsXG4gICAgICAyMDYsXG4gICAgICAyMTksXG4gICAgICAxODgsXG4gICAgICAxNDMsXG4gICAgICAyMzgsXG4gICAgICAzOCxcbiAgICAgIDU1LFxuICAgICAgMjYsXG4gICAgICAxMzgsXG4gICAgICAyMTcsXG4gICAgICAxNzQsXG4gICAgICAyLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDIxLFxuICAgICAgMjQwLFxuICAgICAgMTQzLFxuICAgICAgMixcbiAgICAgIDE0MyxcbiAgICAgIDU2LFxuICAgICAgMTQzLFxuICAgICAgMjMzLFxuICAgICAgMjUwLFxuICAgICAgMjE5LFxuICAgICAgMjMyLFxuICAgICAgNDMsXG4gICAgICAzNixcbiAgICAgIDI1MyxcbiAgICAgIDExOCxcbiAgICAgIDIzOCxcbiAgICAgIDE1MixcbiAgICAgIDEyMyxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTR0xBRThBOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY5MzIzNTA0OjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MzQwMjgzNjc4OTU2OjY4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Bqb2h1Y0RFTWJVNkxRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1hzNStzY2lNRHFFa3RsZFJ3QVcycTVHbWRoalU4K1VTek53N3RaNFFWST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5YkI4NENBVXhzdEJZMkgwZlJOVTR3cHBjU1E4a0Y3NFBnQkRXSmliMTFOSURNN3JzWUM5NWdwbTcraHk1NjRuWGNXTnpXVGdDSVZVWmlsZlR6RklCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkS0tEdjRBYTd3U01lZ0dKd3Q1Y29wUE9KT3g0MGlJSzRSRG5VRjdBTjVKd1VTeHBtdERQbUswZnZJUzRWRnNtU0ZETFZyVWc2WW9ySHRlTkFXcmpEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NjkzMjM1MDQ6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzc5NDAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlFzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFaVFPbVpDVjI4SVQ1UGxZeGJab09ZNDZiaWVYNm9VdUtGTjllejFPV0I4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjE0MjQ3NTYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzE1NjkzNjM2ODMwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
