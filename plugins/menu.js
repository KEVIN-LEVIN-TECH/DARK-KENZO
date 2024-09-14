const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
     react: "📜",
    desc: "get cmd list.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}


let madeMenu = ` 
👋 *Hello ${pushname}* 
*𝙳𝙰𝚁𝙺 𝙺𝙴𝙽𝚉𝙾 𝙼𝙰𝙸𝙽 𝙼𝙴𝙽𝚄*

╭━━━━━━━━━━━━━━━━━━━ 
│*👤Bot Owener: 𝙼𝚁 𝚂𝚎𝚗𝚎𝚜𝚑*
│*🤖Bot Name: 𝙳𝙰𝚁𝙺 𝙺𝙴𝙽𝚉𝙾 𝙼𝙳*
│*🧬Prefix: [.]*
│*🔖Versions: 1.0.0*
│*🔮Whatsap Number: +94773673969*
╰━━━━━━━━━━━━━━━━━━━ 
╭━━❮ 🔧 MAIN COMMAND ❏
${menu.main}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ 📥 DOWNLOAD COMMAND ❏ 
${menu.download}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ 👥 GROUP COMMAND ❏
${menu.group}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ 🔒 OWNER COMMAND ❏
${menu.owner}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ 🔄 CONVERT COMMAND ❏
${menu.convert}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ 🔎 SEARCH COMMAND ❏
${menu.search}
╰━━━━━━━━━━━━━━━━━━━
 
   `
   
 await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/900435c6d3157c98c3c88.jpg"},caption:madeMenu},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})

