let yourscore = document.getElementById("yourscore");
let botscore = document.getElementById("botscore");
let card = ["rock", "paper", "scissor"];
function rps_game(your) {
   let random_card = card[Math.floor(Math.random() * 3)];
   if ((your === "rock" && random_card === "scissor") || (your === "paper" && random_card === "rock") || (your === "scissor" && random_card === "paper")) {

      scoreboard('you');

   }
   else if (your === random_card) {
   }
   else {
      scoreboard('bot');
   }
   cardshow(your, random_card);
   winorloss();
}
function cardshow(your, random_card) {
   const userCardBack = document.querySelector("#user-card .flip-back img");
   const botCardBack = document.querySelector("#bot-card .flip-back img");
   const userCardFront = document.querySelector("#user-card .flip-front img");
   const botCardFront = document.querySelector("#bot-card .flip-front img");

   const userFlip = document.getElementById("user-card");
   const botFlip = document.getElementById("bot-card");

   // Set back images (what's revealed after flip)
   userCardBack.src = your + ".png";
   botCardBack.src = random_card + ".png";

   // Flip to show result
   userFlip.classList.add("flip");
   botFlip.classList.add("flip");

   // AFTER 3 seconds: flip back and reset to card.png
   setTimeout(() => {
      // Flip back
      userFlip.classList.remove("flip");
      botFlip.classList.remove("flip");

      // Reset front images after flip completes
      setTimeout(() => {
         userCardFront.src = "card.png";
         botCardFront.src = "card.png";
      }, 600); // Slight delay to match the flip-back transition
   }, 1000);
}
function scoreboard(scores) {
   let me = parseInt(yourscore.innerText);
   let bots = parseInt(botscore.innerText);
   if (scores === "you") {
      me += 1
      yourscore.innerText = me;

   } else {
      bots += 1
      botscore.innerText = bots;

   }
   // savedata();
}
function winorloss() {
   let me = parseInt(yourscore.innerText);
   let bots = parseInt(botscore.innerText);
   // let mgs = document.getElementById("msg");
   let result = document.getElementById("message");
   let main = document.querySelector(".container");
   if (me === 5 || bots === 5) {
      // alert("you won the match");
      main.style.display = "none";
      result.style.display = "block";
      let winner = me === 5 ? "🧒You Won The Match!🥳🎉.." : "🤖Bot Won The Match!🥳..";
      result.innerHTML = `<div id="result">
    <div class="result_card">
    <h1 id="msg">${winner}</h1>
    <h4 id="points">you: ${me}  |  bot: ${bots} </h4>
    <button class="play-again-btn" onclick="resetgame()">PlayAgain</button>
    </div>
  </div>`;
   }
}
function resetgame() {
   yourscore.innerText = 0;
   botscore.innerText = 0;
   document.querySelector(".container").style.display = "block";
   document.getElementById("message").style.display = "none";
   document.getElementById("message").innerHTML = "";

}
// setTimeout(() => {
//    document.getElementById("message").innerHTML="";
// }, 3000);
// function resetGame(){
//    yourscore.innerText = 0;
//    botscore.innerText = 0;
//    savedata();
// }
// function savedata(){
//    localStorage.setItem("your_score",yourscore.innerHTML);
//    localStorage.setItem("bot_score",botscore.innerHTML);
// }
// function showdata(){
//    yourscore.innerHTML = localStorage.getItem("your_score") || 0;
//    botscore.innerHTML = localStorage.getItem("bot_score") || 0;
// }
// showdata();