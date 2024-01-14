import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TransactionDetails = () => {
    const { transactionId } = useParams();
    const [transactionData, setTransactionData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/transaction/${transactionId}`);
            const data = await response.json();
            setTransactionData(data.transaction);
        };

        fetchData();
    }, [transactionId]);

    if (!transactionData) {
        return <div className="flex items-center justify-center h-screen"><div className="loader"></div></div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded shadow-lg w-full md:w-3/4 lg:w-1/2 space-y-4">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Transaction Details</h1>
                <p className="text-lg mb-4"><span className="font-bold">Transaction ID:</span> {transactionData.txid}</p>
                <p className="text-lg mb-4"><span className="font-bold">Blockhash:</span> {transactionData.blockhash}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Version:</span> {transactionData.version}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Size:</span> {transactionData.size} bytes</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Vsize:</span> {transactionData.vsize} virtual bytes</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Locktime:</span> {transactionData.locktime}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Confirmations:</span> {transactionData.confirmations}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Time:</span> {new Date(transactionData.time * 1000).toLocaleString()}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Blocktime:</span> {new Date(transactionData.blocktime * 1000).toLocaleString()}</div>
                    <div className="bg-blue-100 p-3 rounded shadow"><span className="font-bold">Fee:</span> {transactionData.fee} BTC</div>
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600">Inputs:</h2>
                {transactionData.vin.map((vin, index) => (
                    vin.coinbase ?
                        <div key={index} className="p-4 bg-gray-100 rounded mt-2">
                            <p><span className="font-bold">Coinbase:</span> {vin.coinbase}</p>
                        </div>
                        :
                        <div key={index} className="p-4 bg-gray-100 rounded mt-2">
                            <p><span className="font-bold">Value:</span> {vin.prevout?.value || 'N/A'} BTC</p>
                            <p><span className="font-bold">Address:</span> {vin.prevout?.scriptPubKey?.address || 'N/A'}</p>
                        </div>
                ))}
                <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-600">Outputs:</h2>
                {transactionData.vout.map((vout, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded mt-2">
                        <p><span className="font-bold">Value:</span> {vout.value || 'N/A'} BTC</p>
                        <p><span className="font-bold">N:</span> {vout.n || 'N/A'}</p>
                        <p><span className="font-bold">Address:</span> {vout.scriptPubKey?.address || 'N/A'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionDetails;
