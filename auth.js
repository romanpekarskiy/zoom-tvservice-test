var basicAuth = require('basic-auth');
var adminLogin = 'root';
var adminPasswd = 'toor';

var auth = function (req, res, next) {
  var user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
  } else if (user.name === adminLogin && user.pass === adminPasswd) {
    next();
  } else {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    res.sendStatus(401);
  }
}

module.exports = auth;