import React, { useEffect, useState } from 'react';

const App = () => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        console.log("loaded");
    }, []);

    const customBtnStyle = {
        backgroundColor: isHovered ? '#ffffff' : '#000000',
        color: isHovered ? '#000000' : '#ffffff',
        border: '2px solid #ffffff',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
    };

    return (
        <div
            style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: '#000000',
                color: '#ffffff',
            }}
            className="min-h-screen flex items-center justify-center p-4"
        >
            <div className="flex flex-col items-center justify-center text-center w-full">
                <img
                    id="profile-pic"
                    src="https://github.com/ransomwares.png?size=200"
                    alt="github"
                    className="w-32 h-32 rounded-2xl mb-4 object-cover"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/128x128/000000/ffffff?text=Avatar'; }}
                />

                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight uppercase">
                    LOLZ BY SPARKED X BREACHED
                </h1>

                <p className="text-xl italic text-white mb-8">
                    im sorry, but i needed to do it.
                </p>

                <a
                    href="https://x.com/OnlySparked"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <button
                        className="font-bold py-3 px-8 rounded-lg"
                        style={customBtnStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        @OnlySparked
                    </button>
                </a>
            </div>
        </div>
    );
};

export default App;