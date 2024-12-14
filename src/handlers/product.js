const { getProductsByCategory } = require("../service/service")
const startKeyboard = require("../keyboards/startKeyboard")
const { sendMessagesWithDelay } = require("../utils/utils")

// Handler wich will be executed when category will be chosen
function productHandler(bot) {
    bot.on('message', async(ctx) => {
        const chatId = ctx.chat.id
        const text = ctx.text
        const products = await getProductsByCategory(text)

        if(products.length != 0) {
            await sendMessagesWithDelay(products, chatId, bot)
            
        } else if(text == '/start') {
            bot.removeListener('message')
        } else if(text == 'Назад') {
            bot.sendMessage(chatId, "Назад ⬅️", startKeyboard)
            bot.removeListener('message')
        } else {
            bot.sendMessage(chatId, "Данная категория продукта не была найдена ⭕️", startKeyboard)
            bot.removeListener('message')
        }
    })
}

module.exports = productHandler