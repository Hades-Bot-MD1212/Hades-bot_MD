let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}๐๐๐พ๐๐๐ฝ๐ผ ๐๐ ๐๐๐๐๐๐๐๐ผ ๐๐ผ๐๐ผ ๐๐๐ ๐๐๐๐๐๐๐ฟ๐๐ฟ๐ผ\n๐๐๐๐๐๐๐\n*${usedPrefix + command} Hoy va llover?*\n\n๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐๐ ๐๐ ๐ฝ๐ ๐ผ๐๐๐๐๐๐๐ฟ\n๐๐๐ผ๐๐๐๐\n*${usedPrefix + command} Hoy va llover?*`   
let pre = `โญโใ ๐๐๐๐๐๐๐๐ผ | ๐๐๐๐๐๐๐๐ ใโโฌฃ  
โ๏ธ ๐๐๐๐๐๐๐๐ผ
๐ *${text}*
โโโโโโโโโโโโโโโ
โ ๐๐๐๐๐๐๐๐๐ผ | ๐๐๐๐๐๐๐๐ 
๐ผ *${['Si','Tal vez sรญ','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}*
โฐโโโโโใ ๐  *${vs}* ใโโโโโฌฃ`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, 'โออกโฃ๐๐๐๐๐_๐๐๐_๐๐โออกโฃ', null, null, [
['๐๐ฉ๐ง๐ ๐ซ๐๐ฏ | ๐ผ๐๐๐๐ฃ ๐ฎ', `${usedPrefix + command} ${text}`],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ | ๐ฝ๐๐๐  ๐ฉ๐ค ๐๐๐ฃ๐ช', '/menu']
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler
