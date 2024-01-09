const bitcoin = require('../utils/bitcoinInstance');

const getTransaction = async (req, res) => {
    try {
        const transaction = await bitcoin.getTransaction(req.params.txId);
        res.json({ transaction });
    } catch (error) {
        res.status(500).json({ error: 'Greška pri dohvaćanju transakcije' });
    }
};

module.exports = { getTransaction };
