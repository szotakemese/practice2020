import React from "react"
import './match3.css';
import {Link} from "react-router-dom"
import playMatch3 from './match3-app';

//images
import back from "../back.png"
import rock from "../assets/rock.png"
import mute from "../audioicons/mute.png"
import unmute from "../audioicons/unmute.png"



function Match3() {
    return (
      <div className="game-field">
      <div className="Match3 fadeOut">
        <section className="game">
          <div className="back">
            <Link to="/">
              <img src={back} alt="<" height="40px"/>
            </Link>
          </div>
          <div className="score">
            <div className="player-score">
              <h2>Player</h2>
              <p>0</p>
            </div>

            <div className="computer-score">
              <h2>Computer</h2>
              <p>0</p>
            </div>
          </div>

          <div className="match-3 fadeIn">
            <div className="rules-icon">
              <img src="https://image.flaticon.com/icons/svg/151/151917.svg" alt="" height="25px"/>
            </div>
            <div className = "side-options">
              <div className="rules-text">
                <h1>RULES</h1>
                <h4>Rock Paper Scissors</h4>
                <hr/>
                <p className="rules-content">
                  Scissors cuts Paper   <br/>
                  Paper covers Rock     <br/>
                  Rock crushes Scissors <br/>
                </p>
              </div>
              <div className = 'audio-options'>
                <div className = 'mute fadeIn'><img src={mute} alt="x" height="25px"/></div>
                <div className = 'unmute fadeOut'><img src={unmute} alt="o" height="25px"/></div>
              </div>
            </div>
            <h2 className="winner">Choose an option</h2>
            <div className="hands">
                <img className="player-hand" src={rock} alt=""/>
                <img className="computer-hand" src={rock} alt=""/>
            </div>
            <div className="options">
                <button className="rock">rock</button>
                <button className="paper">paper</button>
                <button className="scissors">scissors</button>
            </div>
          </div>
          
        </section>
        <script>
        {window.onload = playMatch3}
        </script>
      </div>
      </div>
    );
  }
  
export default Match3;