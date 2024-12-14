// Keyboard wich will be sent after choosing the category of the product, it's connected to databese, so it's async  
const catalogKeyboard = {
    disable_web_page_preview: true,
    reply_markup: JSON.stringify({
        keyboard: [
            [{ text: "WAKA" }, { text: "ELFBAR" }, { text: "Подики" }],
            [{ text: "Жидкости" }, { text: "HQD" }, { text: "Картриджи" }],
            [{ text: "Никотиновые конфеты" }, { text: "Снюс" }],
            [{ text: "Назад" }]
        ],
        resize_keyboard: true
    })
}

module.exports = catalogKeyboard