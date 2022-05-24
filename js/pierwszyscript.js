var computerMove;
computerMove = 'kamień';

var playerMove ;
playerMove = 'papier' ;
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to '+ playerMove +', to wygrywasz!');

var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);






var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} 

else if (randomNumber=='2'){
    computerMove='papier' ;
}

else if (randomNumber=='3'){
    computerMove='nozyce' ;
}


else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);



var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') 
{
  playerMove = 'kamień';
} 

else if (playerInput == '2') 
{
  playerMove = 'papier';
} 

else if (playerInput == '3') 
{
  playerMove = 'nozyce';
} 



else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);




function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove){
  if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
