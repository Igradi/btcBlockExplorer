const express = require('express');
const blockController = require('./controllers/blockController');
const transactionController = require('./controllers/transactionController');
const addressController = require('./controllers/addressController');

const app = express();

app.get('/block/:blockId', blockController.getBlock);

app.get('/transaction/:txId', transactionController.getTransaction);

app.get('/address/:address', addressController.getAddressInfo);

const config = {
    host: 'blockchain.oss.unist.hr',
    port: 8332,
    network: 'testnet',
    username: 'student',
    password: 'n23PTn9YHfRDE6KPNJTakd4cfmNVj62jd8kr2REi2i8Tn',
};

app.listen(4000, () => {
    console.log('Server je pokrenut na portu 4000');
});