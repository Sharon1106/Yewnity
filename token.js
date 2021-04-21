var stream = require('getstream');
// pass the app secret when connecting on the server-side
streamclient = stream.connect('56ngat98cs7g', 'fd9rhdxsrrq5uxv4c4jrzy895a6wqaz7pbhpvwraca6ycu4dg6zu2nb9yyndfbrx', '1120536', { location: 'us-west', timeout: 15000 });
// no feed token is req'd when the Stream client was connected with an app secret
var feed = streamclient.feed('user', 'jeff');
var feedToken = streamclient.createUserToken('jeff');
console.log(feedToken)
