import React from 'react';
import './style.css'
import { Edirection, HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import useHeroMoviment from '../../hooks/useHeroMoviment';


interface IProps {
    initialPosition: {
        x: number,
        y: number    
    }
}

function Hero(props: IProps) {

    const {hero, direction} = useHeroMoviment(props.initialPosition);
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET, 
                top: TILE_SIZE * hero.y - HEAD_OFFSET,
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