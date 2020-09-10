const phones = (app) => {
    app.get('/phones', function (req, res) {
        try {
            const phones = require("./phones.json");
            res.json(phones);
        } catch (e) {
            console.error(e);
        }
    });
}

module.exports = phones;