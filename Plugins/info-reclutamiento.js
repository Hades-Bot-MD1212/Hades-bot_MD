import fs from 'fs'
function handler(m, { conn }) {
let text = `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫяєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
├⇶hola bien Bienvenid@s 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫяєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ ⇶Presentarse
├☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ ⇶con foto 
├☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ ⇶nombre 
├☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ ⇶edad 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ 
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Lo que se hace en esta legion 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Somo un Legion los mejores
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Atacamos grupos xxx
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Mandar a soporte 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacker teléfonos
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Robar número de WhatsApp
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacker Facebook
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacer números virtuales
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacer virus
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Espira las personas 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacer su propio WhatsApp 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Mandar WhatsApp inmunes
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Troyanos
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Puedes usar el bot la legión 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Recuperar contraseñas 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Atacar legiones hacen cosa por diversión 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Joder personas cp
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Envira virus en laboratorio 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫяєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫSi quieres a prender 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫponte las insignias 
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫINSIGNIAS☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ  
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ  ➣⃘⃕͜⃟⃤꙰.
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Gracias por su atención 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Somos una legión
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Todo esto lo hacemos con el fin de hacer le bien 
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ No por beneficios propio
├⇶☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ яєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶https://chat.whatsapp.com/LGvb0X9GJM0LXE6yvWIE6x
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣|YOVANI ',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫o| 𝐂𝐫𝐞𝐚𝐭𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/menu5.jpg"),
sourceUrl: `https://wa.me/5212411347465`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/menu5.jpg'
let str = `🧡 *Eso son los contactos para ti.*\n💜 *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.facebook.com/groups/987464505464904/', '𝐆𝐫𝐮𝐩𝐨 𝐝𝐞 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤:', null, null, [
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(reclutamiento)$/i
export default handler
