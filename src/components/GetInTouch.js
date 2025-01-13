import React from 'react';

export default function GetInTouch() {
    return (
        <div className="bg-green-900 text-white p-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-lg">Name</label>
                        <input type="text" className="w-full p-2 rounded-lg text-black" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-lg">Email</label>
                        <input type="email" className="w-full p-2 rounded-lg text-black" placeholder="Your Email" />
                    </div>
                    <div>
                        <label className="block text-lg">Description</label>
                        <textarea className="w-full p-2 rounded-lg text-black" placeholder="Your Message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="bg-black text-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition-colors duration-300">Submit</button>
                </form>
            </div>
        </div>
    );
}
