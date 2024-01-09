const bitcoin = require('../utils/bitcoinInstance');

const getBlock = async (req, res) => {
    try {
        const block = await bitcoin.getBlock(req.params.blockId);
        if (!block) {
            res.status(404).json({ error: 'Blok nije pronađen' });
            return;
        }
        res.json({ block });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Interna greška pri dohvaćanju bloka' });
    }
};

module.exports = { getBlock };
