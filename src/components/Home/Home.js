import React from "react"
import './home.css';
import {Link} from "react-router-dom";
import startGame from "./home-app";

function Home() {

  return (
    <div className="Home">
      
      <section className="game">
        
        <div className="intro fadeIn">
          <h1>Rock Paper Scissors</h1>
          <button id="intro-button">Play</button>
        </div>

        <div className="select-type fadeOut">
          <h2>Choose game mode</h2>
          <div className="game-mode">
            <Link to="/match3">
              <button className="game-3">Rock Paper Scissors</button>
            </Link>
            <Link to="/match5">
              <button className="game-5">Rock Paper Scissors Lizard Spock</button>
            </Link>
          </div>
        </div>
      </section>
      <script>
        {window.onload = startGame}
      </script>
      </div>
    
    
    );
  };

  
  
export default Home;