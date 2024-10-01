const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "rapXwCIY#hln0k790FYytO9eeUpf2b3auMpq7i31DnwsfEVl5Tus",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/DZ72cPY0/Alive-Now.png",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "94773673969",
OWNER_NAME: process.env.OWNER_NAME || "SENESH",
BOT_NAME: process.env.BOT_NAME || "DARK-KENZO-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true"


};
