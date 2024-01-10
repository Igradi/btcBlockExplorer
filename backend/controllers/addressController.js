const bitcoin = require('../utils/bitcoinInstance');

const getAddressInfo = async (req, res) => {
    try {
        const addressInfo = await bitcoin.getAddressInfo(req.params.address);
        res.json({ addressInfo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Greška pri dohvaćanju informacija o adresi' });
    }
};

module.exports = { getAddressInfo };
