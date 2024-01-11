import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlockDetails = () => {
    const { blockId } = useParams();
    const [blockData, setBlockData] = useState(null);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/block/${blockId}`);
                if (response.ok) {
                    const data = await response.json();
                    setBlockData(data.block);

                    const transactionsResponse = await fetch(`http://localhost:4000/block-transactions/${data.block.blockhash}`);
                    if (transactionsResponse.ok) {
                        const transactionsData = await transactionsResponse.json();
                        setTransactions(transactionsData.transactions);
                    } else {
                    }
                } else {
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, [blockId]);

    if (!blockData) {
        return <div className="flex items-center justify-center h-screen"><div className="loader"></div></div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md w-1/2 space-y-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Block Details</h1>
                <div className="space-y-2">
                    <p><span className="font-bold">Block Hash:</span> {blockData.blockhash}</p>
                    <p><span className="font-bold">Average Fee:</span> {blockData.avgfee} satoshis</p>
                    <p><span className="font-bold">Average Fee Rate:</span> {blockData.avgfeerate} satoshis per byte</p>
                    <p><span className="font-bold">Average Transaction Size:</span> {blockData.avgtxsize} bytes</p>
                    <p><span className="font-bold">Height:</span> {blockData.height}</p>
                    <p><span className="font-bold">Inputs:</span> {blockData.ins}</p>
                    <p><span className="font-bold">Max Fee:</span> {blockData.maxfee} satoshis</p>
                    <p><span className="font-bold">Max Fee Rate:</span> {blockData.maxfeerate} satoshis per byte</p>
                    <p><span className="font-bold">Max Transaction Size:</span> {blockData.maxtxsize} bytes</p>
                    <p><span className="font-bold">Median Fee:</span> {blockData.medianfee} satoshis</p>
                    <p><span className="font-bold">Median Time:</span> {new Date(blockData.mediantime * 1000).toLocaleString()}</p>
                    <p><span className="font-bold">Median Transaction Size:</span> {blockData.mediantxsize} bytes</p>
                    <p><span className="font-bold">Min Fee:</span> {blockData.minfee} satoshis</p>
                    <p><span className="font-bold">Min Fee Rate:</span> {blockData.minfeerate} satoshis per byte</p>
                    <p><span className="font-bold">Min Transaction Size:</span> {blockData.mintxsize} bytes</p>
                    <p><span className="font-bold">Outputs:</span> {blockData.outs}</p>
                    <p><span className="font-bold">Subsidy:</span> {blockData.subsidy} satoshis</p>
                    <p><span className="font-bold">Time:</span> {new Date(blockData.time * 1000).toLocaleString()}</p>
                    <p><span className="font-bold">Total Out:</span> {blockData.total_out} satoshis</p>
                    <p><span className="font-bold">Total Size:</span> {blockData.total_size} bytes</p>
                    <p><span className="font-bold">Total Weight:</span> {blockData.total_weight}</p>
                    <p><span className="font-bold">Total Fee:</span> {blockData.totalfee} satoshis</p>
                    <p><span className="font-bold">Transactions:</span> {blockData.txs}</p>
                </div>

                <h2 className="text-xl font-bold mt-4 mb-2">Transactions:</h2>
                <ul className="list-disc list-inside">
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
