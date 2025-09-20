"use client"

import Image from "next/image"
import diamond from "../assets/rewards/diamond.png"
import { useState } from 'react';

const RewardSystem = () => {
    // Mock data
    const credits = 1250;
    const level = 5;
    const [exp, setExp] = useState(75);
    const [dailyClaimAvailable, setDailyClaimAvailable] = useState(true);

    const handleClaimDaily = () => {
        if (dailyClaimAvailable) {
            setExp(prevExp => Math.min(100, prevExp + 10));
            setDailyClaimAvailable(false);
        }
    };

    return (
        <section className="w-full h-60  rounded-lg shadow-2xl flex flex-col overflow-hidden">

            {/* Credits and Daily Claim */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-b from-blue-950/40 to-transparent border-t border-blue-500/70 p-3 sm:p-4 rounded-xl">
                <div className="flex items-center space-x-2 mb-5 sm:mb-0">
                    <Image src={diamond} alt="gems" width={40} height={32} className="text-2xl" />
                    <span className="text-amber-300 text-2xl font-bold">{credits}</span>
                </div>
                {dailyClaimAvailable ? (
                    <button
                        onClick={handleClaimDaily}
                        className="w-full sm:w-auto bg-green-500/30 hover:bg-green-500/40 border border-green-500/70 hover:brightness-150 font-bold py-2 px-5 rounded-lg shadow-md duration-200 transform hover:scale-105 cursor-pointer"
                    >
                        Claim Daily
                    </button>
                ) : (
                    <button className="w-full sm:w-auto bg-gray-600 text-gray-400 font-bold py-2 px-5 rounded-lg cursor-not-allowed shadow-md text-base sm:text-lg" disabled>
                        Claimed
                    </button>
                )}
            </div>

            {/* EXP Progress Bar */}
            <div className="mt-5 p-4 rounded-xl border-b border-purple-500/70">
                <div className="flex justify-between items-center mb-1">
                    <p className="text-gray-300 text-sm sm:text-base font-bold">Level {level}</p>
                    <p className="text-gray-300 text-sm sm:text-base font-bold">{exp}% EXP</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 sm:h-3">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 sm:h-3 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${exp}%` }}
                    />
                </div>
            </div>
        </section>
    );
};

export default RewardSystem;