const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if ( userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' || userInput === 'bomb') {
    return userInput;
  }else {
     console.log('Error, please type : valid Input');
  }
  }
  const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
    
  switch (randomNumber){
    case 0 :
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 3 :
    return 'scissors';
    break;
    deafault :
    return 'unknown';
    break;
  
  }
  
  };
  
  const determineWinner = (userChoice,computerChoice)=>{
    if(userChoice === 'bomb'){
      return "You Win!"
    }
   if(userChoice === computerChoice){
      return "Game was a tie";
   }
  
  
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
     return 'The computer won!';
  }else{
     return "You Won!";
   }
  
  if( userChoice === 'paper')
    if(computerChoice === 'scissors');
         return  'the computer won!' 
  }else{
    return 'You won!';
  
  }
  };
   
  
  const playGame=()=>{
        const userChoice = getUserChoice('paper');
        const computerChoice = getComputerChoice();
        console.log('You threw: ' + userChoice);
        console.log('the computer threw: ' +  computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()