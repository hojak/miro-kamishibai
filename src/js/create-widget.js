const sdk = require('api')('@miro/v1.0#f35y82kvavd4iy');

sdk.auth('');
sdk['create-board-widgets']({type: 'card', title: 'Simple card 42'}, {id: ''})
    .then(res => console.log(res))
    .catch(err => console.error(err));
