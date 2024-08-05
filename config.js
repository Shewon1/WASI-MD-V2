//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZRN1pKZHk0TUNJbHo3WUJLcUw4L240S0hnYjBRb3ZaS21lK3hMOGNXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTRZcG8rSEw3cGxucEZBUlEzSTdVVzNHS2hMN2NsbzR4UzIxVVhDZ29EMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TFZ3UVZiVW55QUM0cmQvQnJxTVV6NXhMZmlISmhpN091YUEzVkxnb0dJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1ZG1vOVowNEwwUmZnSng3Ync2WG9VQXQ3WmVudXZwODd3Q2xBdGZ1YjA0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBeVEwdC95Q3R5K1o4akd5U01EMUU3MmRhUm9valVKMVZ5cHgyZjJ3Mlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlovVEZ3MDNwNWlWMjRWN0VSeU5jYmprL0RaMW9QNThjRmRCUnBycHZ4VWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBYWXE5aVI3MVJjcEdtOEtkamxjVFdpb01PUDIzVVovS0Z2dkF4b20wZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGk4eHNiSjFacDA1YmIwQ1RNdVNORENYb0pBdFg5RWhsNHVMY2hka0cxaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitwMDlDNlhtU1NKdEcwUXE4N2NnVmNqUWEyQUxxclhHMG1ua3NMODlvQXBYRk9WNzZzKzZmeU5PalFWRGZiYUM3Qk54endHaFNMdjhHR2RvYk11UUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiI4aVhQVVV3Z3NDcFVFK2xGWUxFMVJGNHhRdEJnY2o4UDdBZldPa2FGVlBVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0OTk3ODI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI1NEIwNkY3QUZBRDc0NTU1NzA2NDlCRDQ2REM5NkE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI4Njc0Mjd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0OTk3ODI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZCMzNCRTQzRERGMjYxMDlEMEJCNjZBNjNBM0M1RUZFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI4Njc0Mjh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0OTk3ODI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZENjU5QUMwRkI3N0REQ0NFNDVCNzM5NzU3MkQ0RDRFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI4Njc0Mjl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg0OTk3ODI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRDQzE4MkU2RDBEQUIzQzBBNTM4MzBFNjA5QjREMDBGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI4Njc0Mjl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFGYmZKNVI2UWJXaU1sWkh6RmVwLVEiLCJwaG9uZUlkIjoiZWFlMGJhYzYtMzdmYy00N2MxLWE2YTItZmI2OWQ4M2ZiMDY2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRhTHBIeEhRWUQ3a0kwUFhhMGU0VVcybVVobz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZURDdXhGQ0FHZE9vdmJMMFpobGU5cFpTZU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUDg0SzIxTUIiLCJtZSI6eyJpZCI6Ijk0Nzg0OTk3ODI4OjQzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTZjVlOEJFTlc5dzdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImQvNFN1am1CZUxENmp1Z0RIZ0o0TXhtSkNCL2IvQkhLMVByNlhiZUJjVWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9nd0REdXZpc2xrcENCUHZLMGswbDUyQzZ3VjZzdUVub2ZCVC9lOHIvVmg4QVcyUTNjVmdwaE9zQjBZYUVyV3E1U2lDZHFWNnR5SnF5M2RNa09HZUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYZktBWVBjV0ZRc0hiTW5GYTZTVDBuUWRRckxWNmRpQll4UlNaNzM4QVNkc3VkVXhPYUQ1WmVMem9RVUlNTzJEZkhxWFI1cHVaMk5mZEZ6ZDltTm9CQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg0OTk3ODI4OjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhmK0VybzVnWGl3K283b0F4NENlRE1aaVFnZjIvd1J5dFQ2K2wyM2dYRkkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4Njc0MjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRHArIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
