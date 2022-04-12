require('dotenv-safe').config()
const https = require('https')

// uri: `${process.env.API_BASE}/teams/${auth.account_id}/boards`}
// GET https://api.miro.com/v1/boards/{{ board_id }}/widgets
var options = {
    host: 'api.miro.com',
    port: 443,
    path: `/v1/boards/{process.env.BOARD_ID}/widgets`,
    method: 'GET',
    headers: {
        // TODO Der Request gibt einen STATUS 401 zurück - scheint das Authorization Token nicht zu akzeptieren
        Authorization: ` Bearer ${process.env.CLIENT_SECRET}`
    }
};

console.log(options)

https.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
}).end();