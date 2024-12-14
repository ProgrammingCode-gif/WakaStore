const texts = require("../config/texts")
const startKeyboard = require("../keyboards/startKeyboard")

// /start command handler
function startHandler(bot) {
    bot.onText('/start', async(ctx) => {
        const chatId = ctx.chat.id
    
        bot.sendMessage(chatId, texts.startText, startKeyboard)
    })
}

module.exports.startHandler = startHandler