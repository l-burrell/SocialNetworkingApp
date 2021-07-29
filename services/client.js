
exports.home = (req, res) => {
    res.render('index');
}

exports.login = (req, res) => {
    res.render('login')
}

exports.logged = (req, res) => {
    res.render('logged')
}

exports.profile = (req, res) => {
    res.render('profile')
}

exports.signup = (req, res) => {
    res.render('signup')
}

exports.events = (req, res) => {
    res.render('events')
}
