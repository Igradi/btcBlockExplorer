import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">About BTC Testnet Block Explorer</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <h2 className="text-2xl font-bold text-gray-900">My Mission</h2>
                        <p className="mt-1 text-gray-500">
                            My mission is to provide a simple and intuitive way for users to explore the Bitcoin Testnet. I believe in the power of blockchain technology and aim to make it accessible to everyone.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-6">Contact Us</h2>
                        <p className="mt-1 text-gray-500">
                            If you have any questions or feedback, please feel free to contact me and see my other work at https://github.com/Igradi.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
