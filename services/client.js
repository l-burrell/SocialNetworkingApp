
exports.home = (req, res) => {
    res.render('index');
}

exports.login = (req, res) => {
    res.render('login')
}

exports.register = (req, res) => {
    res.render('register')
}

exports.events = (req, res) => {
    res.render('events')
}
