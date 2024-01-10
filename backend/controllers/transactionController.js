const bitcoin = require('../utils/bitcoinInstance');

const getTransaction = async (req, res) => {
    try {
        const transaction = await bitcoin.getRawTransaction(req.params.txId, 2);
        res.json({ transaction });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Greška pri dohvaćanju transakcije' });
    }
};

module.exports = { getTransaction };
