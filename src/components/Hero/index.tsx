import React from 'react';
import './style.css'
import { TILE_SIZE } from '../../settings/constants';


function Hero() {
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: 100, 
                bottom: 48 * 2,
                left: 48 * 2,
                backgroundImage:"url(./assets/HERO.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'hero-animation 1s steps(4) infinite',
                position: 'absolute',
                }} >
        </div>
    )
}

export default Hero;