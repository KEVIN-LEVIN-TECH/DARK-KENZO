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
search: '',
animegirl: '',
fun: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}


let madeMenu = ` 
👋 *𝐇𝐞𝐥𝐥𝐨 ${pushname}* 

🔮𝐃𝐀𝐑𝐊 𝐊𝐄𝐍𝐙𝐎 𝐌𝐃 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔🔮

  ┏👤Bot Owner: MR Senesh
  ┣🤖Bot Name: DARK KENZO MD
  ┣🧬Prefix: [.]
  ┣🔖Versions: 1.0.0
  ┗🔮Whatsapp Number: 94773673969
  

┏━━━━━━━━━━━━━━━━━━━
┃  MAIN COMMAND ❏
┗━━━━━━━━━━━━━━━━━━━
┃ ${menu.main}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  DOWNLOAD COMMAND ❏
┗━━━━━━━━━━━━━━━━━━━
┃ ${menu.download}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  GROUP COMMAND ❏
┗━━━━━━━━━━━━━━━━━━━
┃ ${menu.group}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  OWNER COMMAND ❏
┗━━━━━━━━━━━━━━━━━━━
┃ ${menu.owner}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  CONVERT COMMAND ❏
┗━━━━━━━━━━━━━━━━━━━
┃ ${menu.convert}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  SERCH COMMAND ❏
┗━━━━━━━━━━━━━━━━━━━
┃ ${menu.search}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  ANIMEGIRL COMMAND ❏
┗━━━━━━━━━━━━━━━━━━━
┃ ${menu.anime}
┗━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━
┃  FUN COMMAND ❏
┗━━━━━━━━━━━━━━━━━━━
┃ ${menu.fun}
┗━━━━━━━━━━━━━━━━━━━

ᴄʀᴀᴛᴇᴅ ʙʏ ꜱᴇɴᴇꜱʜ
   `

return await conn.sendMessage(from,{image:{url:"https://i.postimg.cc/j5vR3nGX/Main-Menu.png"},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
