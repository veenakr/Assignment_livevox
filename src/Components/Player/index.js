import React from 'react';
import './style.css';
import PlayerContent from '../PlayerContent';
import PlayerControls from '../PlayerControls';
import axios from 'axios';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: ['https://d2tml28x3t0b85.cloudfront.net/tracks/stream_files/000/696/722/original/Bomba%20Est%C3%A9reo%20-%20To%20My%20Love%20%28Moombahton%20Bootleg%29.mp3?1514668785',
                'https://k003.kiwi6.com/hotlink/2rc3rz4rnp/1.mp3',
                'https://k003.kiwi6.com/hotlink/2rc3rz4rnp/2.mp3',
                'http://k003.kiwi6.com/hotlink/gt2rduy0mo/3.mp3',
                'http://k003.kiwi6.com/hotlink/421ezo6l38/4.mp3',
                'http://k003.kiwi6.com/hotlink/3j1d3r8a4t/5.mp3'
            ],
            currentIndex: 0,
            albums: ['Amanecer', 'Me & You', 'Electro Boy', 'Home', 'Proxy (Original Mix)'],
            trackNames: ['Bomba Estereo - To My Love', 'Alex Skrindo - Me & You', 'Kaaze - Electro Boy', 'Jordan Schor - Home', 'Martin Garrix - Proxy'],
            images: ["https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Amanecer_album_cover.jpg/220px-Amanecer_album_cover.jpg",
                "http://k003.kiwi6.com/hotlink/ifpd9xk6n4/2.jpg",
                "http://k003.kiwi6.com/hotlink/36u2tfrwiu/3.jpg",
                "http://k003.kiwi6.com/hotlink/l633hnztuz/4.jpg",
                "http://k003.kiwi6.com/hotlink/0yp24xn1o8/5.jpg"
            ],
        }
    }

    componentDidMount() {
        const { src } = this.state;
        let audio = new Audio(src[0]);
        audio.loop = false;
        this.setState({
            data: audio
        })
    }

    updateIndex = (val) => {
        const { src, currentIndex } = this.state;
        let indexValue = currentIndex + val;
        if (indexValue < 0 || indexValue > src.length - 1) {
            indexValue = 0;
        }
        let srcNext = src[indexValue];
        let audio = new Audio(srcNext);
        audio.play();
        this.setState({
            data: audio,
            currentIndex: indexValue,
            playing: true,
        })
    }

    render() {
        const { data, currentIndex, albums, trackNames, images } = this.state;
        return (
            <div className="player">
                <div className="player-track active">
                    <div className="album-name">{albums[currentIndex]}</div>
                    <div className="track-name">{trackNames[currentIndex]}</div>
                    <div className="track-time">
                        <div className="current-time">{data && data.currentTime}</div>
                        <div className="track-length"></div>
                    </div>
                    <div className="s-area">
                        <div className="ins-time"></div>
                        <div className="s-hover"></div>
                        <div className="seek-bar"></div>
                    </div>
                </div>
                <PlayerControls data={data} updateIndex={this.updateIndex} />
                <PlayerContent data={data} currentIndex={currentIndex} images={images} />
            </div>
        )
    }
}

export default Player;