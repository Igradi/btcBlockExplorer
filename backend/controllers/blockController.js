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

const getLatestBlocks = async (req, res) => {
    try {
        const latestBlocks = [];
        const blockCount = 5;

        const chainInfo = await bitcoin.getBlockchainInfo();
        const currentHeight = chainInfo.blocks;

        for (let i = currentHeight; i > currentHeight - blockCount; i--) {
            const blockHash = await bitcoin.getBlockHash(i);

            if (!blockHash) {
                continue;
            }

            const block = await bitcoin.getBlock(blockHash);

            if (!block) {
                continue;
            }

            const blockData = {
                height: block.height,
                time: new Date(block.time * 1000).toUTCString(),
                size: block.size,
                transactionCount: block.tx.length
            };

            latestBlocks.push(blockData);
        }

        res.json({ latestBlocks });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Greška pri dohvaćanju najnovijih blokova' });
    }
};


module.exports = { getBlock, getLatestBlocks };
