require("dotenv").config();
// process.env.NAME_VARIABLES
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

module.exports = {
    getHomePage: getHomePage
}