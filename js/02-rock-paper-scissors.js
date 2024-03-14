const choices = ["rock", "paper", "scissors"];

function getChoices() {
  let userChoice = window.prompt("Rock, Paper, Scissors").toLocaleLowerCase();

  let index = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[index];

  console.log(index + " " + computerChoice);

  game(userChoice, computerChoice);

}

getChoices()

function game(userChoice, computerChoice) {

  if ( userChoice != "rock" && userChoice != "paper" && userChoice != "scissors" ) {
    window.alert("Please Enter Valid Choice");
    // getChoices();
    return;
  }

  if( userChoice == "rock"){
    if(computerChoice == "rock"){
        window.alert("Game is a tie");
    }else if(computerChoice == "paper"){
        window.alert("Paper covers rock. You Lose.");
    }else if(computerChoice == "scissors"){
        window.alert("Rock destroys scissors. You Win!");
    }
  }

  if( userChoice == "paper"){
    if(computerChoice == "paper"){
        window.alert("Game is a tie");
    }else if(computerChoice == "rock"){
        window.alert("Paper covers rock. You Win!");
    }else if(computerChoice == "scissors"){
        window.alert("Scissors cut paper. You Lose.");
    }
  }

  if( userChoice == "scissors"){
    if(computerChoice == "scissors"){
        window.alert("Game is a tie");
    }else if(computerChoice == "rock"){
        window.alert("Rock destroys scissors. You Lose.");
    }else if(computerChoice == "paper"){
        window.alert("Scissors cut paper. You Win!");
    }
  }

  // console.log(userChoice + " " + computerChoice);

}
