let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let str = `
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├🙌HOLA TE ENVIAMOS 
├⇶UNIRTE AL LOS💖
├⇶ GRUPOS OFICIALES 
├⇶ DEL BOT DE👩‍🏫✨
├⇶𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓 SOMOS👩‍💻
├⇶ UNA FAMILIA DE BOT
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:1❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶https://chat.whatsapp.com/CG5ZPcJ22fL7QjNRzjguD0
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:2❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├⇶❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓:3❍͜͡➣
├━━━━≪✯𓆩ֶ፝֟𓆪⁩✯≫━━━╯
├⇶https://chat.whatsapp.com/KnpPbr8BN4VDLtwJFMNTtw
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯

╭━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╮
├❍͜͡➣𝐇𝐀𝐃𝐄𝐒_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣
╰━━━━━✯𓆩ֶ፝֟𓆪⁩✯━━━━━╯
*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n
*Please, do not enter with Bot numbers, and maintain respect.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://wa.me/5212411347465', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
['👩‍💻️⃟⃪͡ꦽ𝑪𝑼𝑬𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺🍃️⃟⃪͡ꦽ', '.cuentasgb'],
['❍͜͡➣🎁𝑫𝑶𝑵𝑨𝑹💌❍͜͡➣', '.donar'],
['️🥀️⃟⃪͡ꦽ𝑴𝑬𝑵𝑼🔖️⃟⃪͡ꦽ', '/menu']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
