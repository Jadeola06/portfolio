import React from 'react';

export default function NotFound() {
    return (
        <div className="bg-black text-green-400 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl mt-4">Page Not Found</p>
            <a href="/" className="mt-8 text-lg underline hover:text-green-300">Go Back Home</a>
        </div>
    );
}
