import React from 'react';
import './style.css';

const PlayerContent = (props) => {
        const { currentIndex, images } = props;
        return (
            <div className="player-content">
                <div className="album-art">
                    {
                        images.map((val, index) => {
                            return <img src={val} id={index} className={index === currentIndex && "active"} />
                        })
                    }

                    <div className="buffer-box">Buffering ...</div>
                </div>
            </div>
        )
}

export default PlayerContent;