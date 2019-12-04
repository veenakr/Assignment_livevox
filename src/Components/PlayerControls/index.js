import React from 'react';
import './style.css'

class PlayerControls extends React.Component {

    handlePlay = () => {
        const { data } = this.props;
        let show = document.getElementsByClassName("player-track")[0];
        if(data.paused) {
            data.play();
            show.style.visibility = 'visible';
        } else { 
            data.pause();
            show.style.visibility = 'hidden';
        }
    }

    playPrev = () => {
        const {data, updateIndex} = this.props;
        updateIndex(-1);
        data.pause();
    }

    playNext = () => {
        const {data, updateIndex} = this.props;
        updateIndex(+1);
        data.pause();
    }

    render() {
        return (
            <div id="player-controls">
            <div className="control">
              <div className="button" id="play-previous" onClick={this.playPrev}>
                <i className="fas fa-backward">Prev</i>
              </div>
            </div>
            <div className="control">
              <div className="button" id="play-pause-button" onClick={this.handlePlay}>
        <i className="fas fa-play">Play/Pause</i>
              </div>
            </div>
            <div className="control">
              <div className="button" id="play-next" onClick={this.playNext}>
                <i className="fas fa-forward">Next</i>
              </div>
            </div>
          </div>
        )
    }
}

export default PlayerControls;