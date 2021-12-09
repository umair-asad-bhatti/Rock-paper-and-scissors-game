
//create a entery point for our game
const init = () => {

    let pscore = 0;
    let cscore = 0;

    //this will remove the welcome screen and appear the playing game screen
    const playbutton = () => {

        const playbtn = document.querySelector("#play_btn");
        const match = document.querySelector(".match");
        const start = document.querySelector(".start");
        playbtn.addEventListener("click", () => {

            start.classList.add("remove");
            match.classList.add("show");

        });
    }


    //whole game is coded here
    const genStr = () => {

        const str = ["rock", "paper", "scissor"];
        //lets graps the player images as well as computer imageS
        let player_hand = document.querySelector("#player_hand");
        let computer_hand = document.querySelector("#computer_hand");
        //lets grap both the images 
        const imgs = document.querySelectorAll(".images img");


        //iterating both images and checking if they have animated already
        //if true then remove the animation so that we can keep hands animating
        //afer each round
        imgs.forEach(element => {
            element.addEventListener("animationend", function () {
                element.style.animation = "";

            })
        });

        const btns = document.querySelectorAll(".play_buttons button");//grasping the playable buttons
        btns.forEach(options => {
            options.addEventListener("click", () => {



                //lets generate a random number for computer
                const comNum = Math.floor(Math.random() * 3);
                const comOpt = str[comNum];//comOpt contains the random str for rock, paper and scissors

                const btnText = options.textContent;//btn text will contain the options for player


                //add animations
                //adding animatio for hands to move up and down
                player_hand.style.animation = "playerAnimation 1.5s ease";
                computer_hand.style.animation = "ComputerAnimation 1.5s ease";
                //the change of pictures and compare function will run after the animation has done
                setTimeout(() => {
                    //lets update the images accordingly
                    player_hand.src = `./assets/${btnText}.png`;
                    computer_hand.src = `./assets/${comOpt}.png`;
                    //call to compare function
                    cmpHands(btnText, comOpt);
                }, 1500)


            });
        });
    }
    //lets maek a function for score update
    const updateScore = () => {

        let player_score = document.querySelector("#player_score");
        let computer_score = document.querySelector("#computer_score");
        player_score.textContent = pscore;
        computer_score.textContent = cscore;
    }


    //lets make a compare function to declare a winner for game
    const cmpHands = (playerHand, compHand) => {



        //lets grab the winner announce headings
        const win_status = document.querySelector("#winning_stats");


        //lets check for a tie
        if (playerHand == compHand) {
            win_status.textContent = "Tie";
            return;
        }
        else if (playerHand == "rock") {
            if (compHand == "scissor") {
                win_status.textContent = "Player Wins";
                pscore++;
                updateScore();//after each round the update function will update results

                return;
            }
            else {
                win_status.textContent = "Computer Wins";
                cscore++;
                updateScore();

                return;
            }
        }
        else if (playerHand == "scissor") {
            if (compHand == "rock") {
                win_status.textContent = "Computer Wins";
                cscore++;
                updateScore();

                return;
            }
            else {
                win_status.textContent = "player Wins";
                pscore++;
                updateScore();
                return;
            }
        }

        else if (compHand == "rock") {
            if (playerHand == "scissor") {
                win_status.textContent = "Computer Wins";
                cscore++;
                updateScore();
                return;
            }
            else {
                win_status.textContent = "player Wins";
                pscore++;
                updateScore();
                return;
            }
        }
        else if (compHand == "scissor") {
            if (playerHand == "rock") {
                win_status.textContent = "player Wins";
                pscore++;
                updateScore();
                return;
            }
            else {
                win_status.textContent = "Computer Wins";
                cscore++;
                updateScore();
                return;
            }
        }
        else {
            console.log("problem occured! try again");
        }
    }





    //call to functions
    genStr();
    playbutton();
}

//call to init function to run scripting the webpage
init();