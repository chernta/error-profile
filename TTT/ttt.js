const boxes = document.getElementsByTagName('div');
console.log(boxes);

let player = true;

function givePlayerSymbol(){
  if (player == true){
    return 'O';
  } 
  else {
    return 'X';
  }
}

function switchPlayer(){
  player = !player;
}
function fillBox (id, symbol){
  let box = document.getElementById(id);
  box.innerHTML = symbol;
}
  
//test success ! fillBox("box1", "O"); 

function checkWin(){
  if (document.getElementById('box0').innerHTML == document.getElementById('box1').innerHTML && document.getElementById('box1').innerHTML == document.getElementById('box2').innerHTML && document.getElementById('box0').innerHTML != '') {
    return true
  }
  else if (document.getElementById('box3').innerHTML == document.getElementById('box4').innerHTML && document.getElementById('box4').innerHTML == document.getElementById('box5').innerHTML && document.getElementById('box3').innerHTML != ''){
   return true
  }
  else if (document.getElementById('box6').innerHTML == document.getElementById('box7').innerHTML && document.getElementById('box7').innerHTML == document.getElementById('box8').innerHTML && document.getElementById('box6').innerHTML != ''){
    return true
  }
  else if (document.getElementById('box0').innerHTML == document.getElementById('box3').innerHTML && document.getElementById('box3').innerHTML == document.getElementById('box6').innerHTML && document.getElementById('box0').innerHTML != '') {
    return true
  }
  else if (document.getElementById('box1').innerHTML == document.getElementById('box4').innerHTML && document.getElementById('box4').innerHTML == document.getElementById('box7').innerHTML && document.getElementById('box1').innerHTML != '') {
    return true
  }
  else if (document.getElementById('box2').innerHTML == document.getElementById('box5').innerHTML && document.getElementById('box5').innerHTML == document.getElementById('box8').innerHTML && document.getElementById('box2').innerHTML != '') {
    return true
  }
  else if (document.getElementById('box0').innerHTML == document.getElementById('box4').innerHTML && document.getElementById('box4').innerHTML == document.getElementById('box8').innerHTML && document.getElementById('box0').innerHTML != '') {
    return true
  }
  else if (document.getElementById('box2').innerHTML == document.getElementById('box4').innerHTML && document.getElementById('box4').innerHTML == document.getElementById('box6').innerHTML && document.getElementById('box2').innerHTML != '') {
    return true
  }
  else {
    return false;
  }
}

let count = 0;
for (let i = 0; i < boxes.length; i++) { // console.log(boxes[i]);

  boxes[i].onclick = function (event) {

    if (event.target.innerHTML == '') {
      if (count < boxes.length ){
        fillBox(event.target.id, givePlayerSymbol());
        switchPlayer();
        count ++;

        if (checkWin() == true){
          window.alert("win");
          location.reload();
        }
        else if (count == 9) {
          window.alert("It's tie");
          location.reload();
        }


      }
      
    }
    else{
      window.alert("The box is taken, click on another box!");
    }

  }

}
