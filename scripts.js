// Client Brief...
// Create an application which can be used to keep track of a score in a football match..

// 1. It's football, there's two teams, let's keep two scores going
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

// 2. When team one button is clicked, increment team1 score
function handleTeamOneAdd() {
    teamScoreOne++;
    document.getElementById("teamScoreOne").innerHTML = teamScoreOne;
    document.getElementById("scoreOneMinus").disabled = false;
}

// 3. When team two button is clicked, increment team2 score
function handleTeamTwoAdd() {
    teamScoreTwo++;
    document.getElementById("teamScoreTwo").innerHTML = teamScoreTwo;
    document.getElementById("scoreTwoMinus").disabled = false;
}

// 4. When do we finish/stop?
function handleStopGame() {
    isGameStopped = true;
    {document.getElementById("scoreOne").style.display="none";}
    {document.getElementById("scoreTwo").style.display="none";}
    {document.getElementById("scoreOneMinus").style.display="none";}
    {document.getElementById("scoreTwoMinus").style.display="none";}
    {document.getElementById("stopGame").style.display="none";}

    if (teamScoreOne > teamScoreTwo) {
        document.getElementById("scoreTitle").innerHTML = "🏆 Team 1️⃣ Wins";
        document.getElementById("teamScoreOneDescription").innerHTML = "🏆 Team 1️⃣";
        document.getElementById("teamScoreTwoDescription").innerHTML = "🥈 Team 2️⃣";
    } else if (teamScoreTwo > teamScoreOne) {
        document.getElementById("scoreTitle").innerHTML = "🏆 Team 2️⃣ Wins";
        document.getElementById("teamScoreTwoDescription").innerHTML = "🏆 Team 2️⃣";
        document.getElementById("teamScoreOneDescription").innerHTML = "🥈 Team 1️⃣";
    } else {
        document.getElementById("scoreTitle").innerHTML = "🤝 It's a draw!";
        document.getElementById("teamScoreTwoDescription").innerHTML = "🤛 Team 2️⃣";
        document.getElementById("teamScoreOneDescription").innerHTML = "🤜 Team 1️⃣";
    }
}

// 5. When to clear the scores for the next game
function handleClearScore() {
    teamScoreOne = 0;
    teamScoreTwo = 0;
    document.getElementById("scoreTitle").innerHTML = "Score Board";
    document.getElementById("teamScoreOne").innerHTML = teamScoreOne;
    document.getElementById("teamScoreTwo").innerHTML = teamScoreTwo;
    document.getElementById("teamScoreOneDescription").innerHTML = "Team 1️⃣";
    document.getElementById("teamScoreTwoDescription").innerHTML = "Team 2️⃣";
    {document.getElementById("scoreOne").style.display="block";}
    {document.getElementById("scoreTwo").style.display="block";}
    {document.getElementById("stopGame").style.display="block";}
    {document.getElementById("scoreOneMinus").style.display="block";}
    {document.getElementById("scoreTwoMinus").style.display="block";}
}

// 6. Remove team1 score
function handleTeamOneMinus() {
    teamScoreOne--;
    if (teamScoreOne <= 0) {
        teamScoreOne = 0;
        document.getElementById("scoreOneMinus").disabled = true;
    }
    document.getElementById("teamScoreOne").innerHTML = teamScoreOne;
    
}

// 7. Remove team2 score
function handleTeamTwoMinus() {
    teamScoreTwo--;
    if (teamScoreTwo <= 0) {
        teamScoreTwo = 0;
        document.getElementById("scoreTwoMinus").disabled = true;
    }
    document.getElementById("teamScoreTwo").innerHTML = teamScoreTwo;
    
}

// 8. Toggle dark mode
function handleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }