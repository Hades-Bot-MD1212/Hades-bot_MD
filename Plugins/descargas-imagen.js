import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} ๐๐๐ ๐ฟ๐ ๐๐ผ ๐๐๐๐๐๐๐๐๐ ๐๐ผ๐๐๐๐ผ\n*${usedPrefix + command} Gata*\n\n๐๐๐ ๐พ๐๐๐๐ผ๐๐ฟ ๐๐๐๐\n*${usedPrefix + command} Cat*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `๐ ๐๐๐จ๐ช๐ก๐ฉ๐๐๐ค | ๐๐๐จ๐ช๐ก๐ฉ: ${text}`, `๐ฎ๐ถ๐ถ๐ฎ๐ณ๐ฌ | ${wm}`, link, link, 'โ๏ธ ๐๐๐', null, null, [
['โ๏ธ๐๐๐๐ช๐๐๐ฃ๐ฉ๐โถ๏ธ | ๐๐๐ญ๐ฉ', `/imagen ${text}`],
['๐๏ธโโชอก๊ฆฝ๐ท๐ฐ๐ต๐ป๐ฌ๐น๐ฌ๐บ๐ป๐๏ธโโชอก๊ฆฝ', `#pinterest ${text}`],
['๐ฅ๏ธโโชอก๊ฆฝ๐ด๐ฌ๐ต๐ผ๐๏ธโโชอก๊ฆฝ', `.menu`],  
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
export default handler
