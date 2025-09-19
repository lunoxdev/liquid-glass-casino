'use client';

import React, { useEffect } from 'react';
import { Howl } from 'howler';

const AudioPlayer: React.FC = () => {
    useEffect(() => {
        const sound = new Howl({
            src: ['/assets/nathan-theme.mp3'],
            loop: true,
            autoplay: true,
            volume: 0.5, // Adjust the volume as needed
        });

        sound.play();

        return () => {
            sound.unload();
        };
    }, []);

    return null; // This component doesn't render anything visible
};

export default AudioPlayer;
