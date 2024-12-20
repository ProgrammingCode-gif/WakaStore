// Keyboard wich will be sent after choosing the category of the product, it's connected to databese, so it's async  
const catalogKeyboard = {
    disable_web_page_preview: true,
    reply_markup: JSON.stringify({
        keyboard: [
            [{ text: "WAKA" }, { text: "ELFBAR" }, { text: "Подики" }],
            [{ text: "Solobar" }, {text: "HSD"}, { text: "Masking" }],
            [{ text: "Никотиновые конфеты" }, { text: "Снюс" }, {text: "Расходники"}],
            [{ text: "Boshki" }, {text: "Husky"}, {text: "Head hunter"}],
            [{ text: "Jumbo" }, {text: "Ice paradise"}, {text: "Maxwells"}],
            [{ text: 'Glitch'}, { text: "Jam monster"}, { text: "Назад" }]
        ],
        resize_keyboard: true
    })
}

module.exports = catalogKeyboard