// Keyboard wich will be sent after /start command
const startKeyboard = {
    reply_markup: JSON.stringify({
        keyboard: [
            [{text: "Каталог товаров"}]
        ],
        resize_keyboard: true
    })
}

module.exports = startKeyboard