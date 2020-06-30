//Start the game
function startGame() {
    
    window.onload = function() {
        //considering there aren't any hashes in the urls already
        if(!window.location.hash) {
            //setting window location
            window.location = window.location + '#loaded';
            //using reload() method to reload web page
            window.location.reload();
        }
    }
    
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const selectType = document.querySelector('.select-type');
    
    playBtn.addEventListener('click', ()=> {
        introScreen.classList.remove("fadeIn");
        introScreen.classList.add("fadeOut");
        selectType.classList.remove("fadeOut");
        selectType.classList.add("fadeIn");
    });    
    
};

export default startGame;
