import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππ πππΏππ π πΎπΌππΌπ πΏπ ππππππ½π\n\nπππππ ππΌππ ππ πΌ ππππππ½π πππΏππ ππ πΎππΌππππ`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
β­ΧββΧβΧββΧββΧβΧββΧββΧβΧ
ββΝΝ‘β£πππππ_πππ_ππβΝΝ‘β£
βββΧβΧββΧββΧβΧββΧββΧβΧ
ββ¨ *${v.title}* 
βπ (${v.url})
ββ³ *DuraciΓ³n:* ${v.durationH}
βπ *Fecha:* de subida: ${v.durationH}
βπ *Vistas:* ${v.view} 
β°βΧββΧβΧββΧββΧβΧββΧββΧβΧ
      `.trim()
      case 'channel': return `
β­ΧββΧβΧββΧββΧβΧββΧββΧβΧ
ββΝΝ‘β£πππππ_πππ_ππβΝΝ‘β£
βββΧβΧββΧββΧβΧββΧββΧβ
ββ¨ *${v.channelName}* 
(${v.url})
βπ₯ *Subscriptores:* ${v.subscriberH} 
βπ₯ *Videos:* ${v.videoCount}  
β°βΧββΧβΧββΧββΧβΧββΧββΧβΧ
`.trim()
    }
  }).filter(v => v).join('\n====================================\n')
 await m.reply(teks)
 let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['π₯βππ΄π¬π΅πΌ π«π¬ π©πΌπΊπͺπ¨π«πΆπΉπ¬πΊπ₯βπ', '/menΓΊbuscadores'],
['βΆβπ€π¬πΊπ»π¨π«πΆ π«π¬π³ π©πΆπ»βΆβπ§', '/estado'],
['π₯οΈββͺΝ‘κ¦½π΄π¬π΅πΌποΈββͺΝ‘κ¦½', '/menu']
], m,)      
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
export default handler
