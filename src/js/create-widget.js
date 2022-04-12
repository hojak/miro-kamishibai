const sdk = require('api')('@miro/v1.0#f35y82kvavd4iy');
const config = require("../../test/http-client.private.env.json");

sdk.auth(config.dev.api_token);
sdk['create-board-widgets']({type: 'card', title: 'Simple card 42'}, {id: config.dev.board_id})
    .then(res => console.log(res))
    .catch(err => console.error(err));
