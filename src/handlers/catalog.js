const texts = require("../config/texts")
const catalogKeyboard = require("../keyboards/catalogKeyboard")
const productHandler = require("./product")

function catalogHandler(bot) {
    bot.onText('Каталог товаров', async(ctx) => {
        const chatId = ctx.chat.id

        bot.sendMessage(chatId, texts.catalogText, catalogKeyboard)
        productHandler(bot)
    })
}

module.exports = catalogHandler