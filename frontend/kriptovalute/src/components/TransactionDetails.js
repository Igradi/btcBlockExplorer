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
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded shadow-md w-1/2">
                <h1 className="text-2xl font-bold mb-4">Transaction Details</h1>
                <p><span className="font-bold">Transaction ID:</span> {transactionData.txid}</p>
                <p><span className="font-bold">Hash:</span> {transactionData.hash}</p>
                <p><span className="font-bold">Version:</span> {transactionData.version}</p>
                <p><span className="font-bold">Size:</span> {transactionData.size}</p>
                <p><span className="font-bold">Vsize:</span> {transactionData.vsize}</p>
                <p><span className="font-bold">Weight:</span> {transactionData.weight}</p>
                <p><span className="font-bold">Locktime:</span> {transactionData.locktime}</p>
                <p><span className="font-bold">Blockhash:</span> {transactionData.blockhash}</p>
                <p><span className="font-bold">Confirmations:</span> {transactionData.confirmations}</p>
                <p><span className="font-bold">Time:</span> {transactionData.time}</p>
                <p><span className="font-bold">Blocktime:</span> {transactionData.blocktime}</p>
                <h2 className="text-xl font-bold mt-4 mb-2">Outputs:</h2>
                {transactionData.vout.map((vout, index) => (
                    <div key={index}>
                        <p><span className="font-bold">Value:</span> {vout.value}</p>
                        <p><span className="font-bold">N:</span> {vout.n}</p>
                        <p><span className="font-bold">Address:</span> {vout.scriptPubKey.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionDetails;
