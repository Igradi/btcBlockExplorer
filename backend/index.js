const express = require('express');
const cors = require('cors');
const blockController = require('./controllers/blockController');
const transactionController = require('./controllers/transactionController');
const addressController = require('./controllers/addressController');

const app = express();

app.use(cors());

app.get('/block/:blockId', blockController.getBlock);
app.get('/latest-blocks', blockController.getLatestBlocks);

app.get('/transaction/:txId', transactionController.getTransaction);

app.get('/address/:address', addressController.getAddressInfo);

app.listen(4000, () => {
    console.log('Server je pokrenut na portu 4000');
});