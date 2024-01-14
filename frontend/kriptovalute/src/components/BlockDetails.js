import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlockDetails = () => {
    const { blockId } = useParams();
    const [blockData, setBlockData] = useState(null);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const isBlockHeight = !isNaN(blockId);
            const url = isBlockHeight ? `http://localhost:4000/block-by-height/${blockId}` : `http://localhost:4000/block/${blockId}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const blockData = data.blockStats || data.block;
                setBlockData(blockData);

                if (blockData) {
                    const transactionsResponse = await fetch(`http://localhost:4000/block-transactions/${blockData.blockhash}`);
                    if (transactionsResponse.ok) {
                        const transactionsData = await transactionsResponse.json();
                        setTransactions(transactionsData.transactions);
                    }
                }
            }
        };

        fetchData();
    }, [blockId]);

    if (!blockData) {
        return <div className="flex items-center justify-center h-screen"><div className="loader"></div></div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded shadow-lg w-full md:w-3/4 lg:w-1/2 space-y-4 m-4">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Block Details</h1>
                <p className="text-lg mb-4"><span className="font-bold">Block Hash:</span> {blockData.blockhash}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Average Fee:</span> {blockData.avgfee} satoshis</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Average Fee Rate:</span> {blockData.avgfeerate} satoshis per byte</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Average Transaction Size:</span> {blockData.avgtxsize} bytes</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Height:</span> {blockData.height}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Inputs:</span> {blockData.ins}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Max Fee:</span> {blockData.maxfee} satoshis</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Max Fee Rate:</span> {blockData.maxfeerate} satoshis per byte</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Max Transaction Size:</span> {blockData.maxtxsize} bytes</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Median Fee:</span> {blockData.medianfee} satoshis</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Median Time:</span> {new Date(blockData.mediantime * 1000).toLocaleString()}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Median Transaction Size:</span> {blockData.mediantxsize} bytes</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Min Fee:</span> {blockData.minfee} satoshis</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Min Fee Rate:</span> {blockData.minfeerate} satoshis per byte</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Min Transaction Size:</span> {blockData.mintxsize} bytes</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Outputs:</span> {blockData.outs}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Subsidy:</span> {blockData.subsidy} satoshis</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Time:</span> {new Date(blockData.time * 1000).toLocaleString()}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Total Out:</span> {blockData.total_out} satoshis</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Total Size:</span> {blockData.total_size} bytes</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Total Weight:</span> {blockData.total_weight}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Total Fee:</span> {blockData.totalfee} satoshis</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Transactions:</span> {blockData.txs}</div>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600">Transactions:</h2>
                <ul className="list-disc list-inside space-y-2">
                    {transactions.map((transaction, index) => (
                        <li key={index} className="text-blue-500 hover:underline">
                            <Link to={`/transactionDetails/${transaction}`}>{transaction}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlockDetails;
