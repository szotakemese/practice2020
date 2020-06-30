import React from "react"
import './match5.css';
import {Link} from "react-router-dom"
import playMatch5 from './match5-app';

//images
import back from "../back.png"
import rock from "../assets/rock.png"


function Match5() {
    return (
      <div className="game-field">
      <div className="Match5 fadeOut">
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

          <div className="match-5 fadeIn">
            <div className="rules-icon">
              <img src="https://image.flaticon.com/icons/svg/151/151917.svg" alt="" height="25px"/>
            </div>
            <div className="rules-text">
              <h1>RULES</h1>
                <h4>Rock Paper Scissors Lizard Spock</h4>
              <hr/>
              <p className="rules-content">
                    Scissors cuts Paper         <br/>
                    Paper covers Rock           <br/>
                    Rock crushes Lizard         <br/>
                    Lizard poisons Spock        <br/>
                    Spock smashes Scissors      <br/>
                    Scissors decapitates Lizard <br/>
                    Lizard eats Paper           <br/>
                    Paper disproves Spock       <br/>
                    Spock vaporizes Rock        <br/>
                    Rock crushes Scissors       <br/>
              </p>
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
                <button className="lizard">lizard</button>
                <button className="spock">spock</button>
            </div>
          </div>
          
        </section>
        <script>
        {window.onload = playMatch5}
      </script>
      </div>
      </div>
    );
  }
  
export default Match5;