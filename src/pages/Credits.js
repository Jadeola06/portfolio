import React from 'react';
import GetInTouch from '../components/GetInTouch';

export default function ProjectPage() {
    return (
        <div className="bg-black text-green-400 min-h-screen">
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-semibold mb-8">Credits</h2>
                <ul>
                    <li><a href="https://www.sheetgo.com/templates/finance/expenses-tracker-template" className="hover:text-green-300">Expense Tracker Template</a></li>
                    <li><a href="https://medium.muz.li/designing-a-finance-tracker-app-be24ad13ea0f" className="hover:text-green-300">Finance Tracker App Design</a></li>
                    <li><a href="https://www.vecteezy.com/free-vector/quiz-time" className="hover:text-green-300">Quiz Time Vector</a></li>
                    <li>Inspiration: <a href="https://brittanychiang.com" className="hover:text-green-300">Brittany Chiang</a></li>
                </ul>
            </div>
            <GetInTouch />
        </div>
    );
}
