import React from 'react';
import './style.css'
import { Edirection, HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import useHeroMoviment from '../../hooks/useHeroMoviment';


function Hero() {

    const {hero, direction} = useHeroMoviment();
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET, 
                bottom: TILE_SIZE * hero.y,
                left: TILE_SIZE * hero.x,
                backgroundImage:"url(./assets/HERO.png)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                animation: 'hero-animation 1s steps(4) infinite',
                position: 'absolute',
                transform: `scaleX(${direction === Edirection.RIGHT ? 1 : -1})`,
                zIndex: 1,
                }} >
        </div>
    )
}

export default Hero;