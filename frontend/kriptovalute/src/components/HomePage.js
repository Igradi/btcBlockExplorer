import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">BTC Testnet Block Explorer</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <h2 className="text-2xl font-bold text-gray-900">Welcome to BTC Block Explorer!</h2>
                        <p className="mt-1 text-gray-500">This is a simple BTC Block Explorer built with React and Tailwind CSS. You can search for blocks, transactions, and more.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
