const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    react: "👨‍💻",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `👋 *𝙷𝚎𝚕𝚕𝚘 ${pushname} 𝙸'𝚖 𝚊𝚕𝚒𝚟𝚎 𝚗𝚘𝚠*

*Im DARK-KENZO-MD Whatsapp Bot Create By Senesh🍂✨*

*I am dark kenzo md whatsapp bot. How can I help you.*
*To get the menu, type as menu.* *If you need to know something about the bot,*
*type as owner and direct the question to me. Good day*

*My Whatsapp Chanel = https://whatsapp.com/channel/0029VakzRXO6rsQw95N67f0v*

*Owner Number = +94773673969*

©𝙳𝙰𝚁𝙺 𝙺𝙴𝙽𝚉𝙾 𝙼𝙳`
    
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
