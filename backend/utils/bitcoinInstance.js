const BitcoinCore = require('bitcoin-core');

const config = {
    host: 'blockchain.oss.unist.hr',
    port: 8332,
    network: 'testnet',
    username: 'student',
    password: 'n23PTn9YHfRDE6KPNJTakd4cfmNVj62jd8kr2REi2i8Tn',
};

const bitcoin = new BitcoinCore(config);

module.exports = bitcoin;
