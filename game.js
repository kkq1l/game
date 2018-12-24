var timeElem = document.getElementById('time'), 
        countdown = new Date(),
        responseTime = new Date(Date.now() + (400*10)); // таймер 10 секунд
 
function startTime() {
  countdown.setTime(responseTime - Date.now());
  timeElem.innerHTML = countdown.getUTCHours() + ':' + countdown.getUTCMinutes() + ':' + countdown.getUTCSeconds();
  if(countdown.getUTCHours() > 0 || countdown.getUTCMinutes() > 0 || countdown.getUTCSeconds() > 0) 
  requestAnimationFrame(startTime);
  else {
  document.getElementById("step1").innerHTML = "S"; document.getElementById("step1").style.color = "red"; 
  document.getElementById("step2").innerHTML = "T"; document.getElementById("step2").style.color = "red"; 
  document.getElementById("step3").innerHTML = "P"; document.getElementById("step3").style.color = "red"; 
  document.getElementById("time").style.color = "red"; 
  document.getElementById("score").style.color = "red"; 
  step=10;
 } 
}
requestAnimationFrame(startTime);

var arr = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77];
var rand1;
var rand2;
var rand3;
rand1= Math.floor(Math.random() * 26);
rand2= Math.floor(Math.random() * 26);
rand3= Math.floor(Math.random() * 26);

step1=arr[rand1];
step2=arr[rand2];
step3=arr[rand3];
step=1;
score=0;
combo=1;
foll=0;


    switch(step1){
         case 81:  // Буква Q
			document.getElementById("step1").innerHTML = "Q";
				break;
         case 87:  // Буква W
			document.getElementById("step1").innerHTML = "W";
				break;
         case 69:  // Буква E
			document.getElementById("step1").innerHTML = "E";
				break;
         case 82:  // Буква R
			document.getElementById("step1").innerHTML = "R";
				break;
         case 84:  // Буква T
			document.getElementById("step1").innerHTML = "T";
				break;
         case 89:  // Буква Y
			document.getElementById("step1").innerHTML = "Y";
				break;
         case 85:  // Буква U
			document.getElementById("step1").innerHTML = "U";
				break;
         case 73:  // Буква I
			document.getElementById("step1").innerHTML = "I";
				break;
         case 79:  // Буква O
			document.getElementById("step1").innerHTML = "O";
				break;
         case 80:  // Буква P
			document.getElementById("step1").innerHTML = "P";
				break;
         case 65:  // Буква A
			document.getElementById("step1").innerHTML = "A";
				break;
         case 83:  // Буква S
			document.getElementById("step1").innerHTML = "S";
				break;
         case 68:  // Буква D
			document.getElementById("step1").innerHTML = "D";
				break;
         case 70:  // Буква F
			document.getElementById("step1").innerHTML = "F";
				break;
         case 71:  // Буква G
			document.getElementById("step1").innerHTML = "G";
				break;
         case 72:  // Буква H
			document.getElementById("step1").innerHTML = "H";
				break;
         case 74:  // Буква J
			document.getElementById("step1").innerHTML = "J";
				break;
         case 75:  // Буква K
			document.getElementById("step1").innerHTML = "K";
				break;
         case 76:  // Буква L
			document.getElementById("step1").innerHTML = "L";
				break;
         case 90:  // Буква Z
			document.getElementById("step1").innerHTML = "Z";
				break;
         case 88:  // Буква X
			document.getElementById("step1").innerHTML = "X";
				break;
         case 67:  // Буква C
			document.getElementById("step1").innerHTML = "C";
				break;
         case 86:  // Буква V
			document.getElementById("step1").innerHTML = "V";
				break;
         case 66:  // Буква B
			document.getElementById("step1").innerHTML = "B";
				break;
         case 78:  // Буква N
			document.getElementById("step1").innerHTML = "N";
				break;
         case 77:  // Буква M
			document.getElementById("step1").innerHTML = "M";
				break;
    }

    switch(step2){
         case 81:  // Буква Q
			document.getElementById("step2").innerHTML = "Q";
				break;
         case 87:  // Буква W
			document.getElementById("step2").innerHTML = "W";
				break;
         case 69:  // Буква E
			document.getElementById("step2").innerHTML = "E";
				break;
         case 82:  // Буква R
			document.getElementById("step2").innerHTML = "R";
				break;
         case 84:  // Буква T
			document.getElementById("step2").innerHTML = "T";
				break;
         case 89:  // Буква Y
			document.getElementById("step2").innerHTML = "Y";
				break;
         case 85:  // Буква U
			document.getElementById("step2").innerHTML = "U";
				break;
         case 73:  // Буква I
			document.getElementById("step2").innerHTML = "I";
				break;
         case 79:  // Буква O
			document.getElementById("step2").innerHTML = "O";
				break;
         case 80:  // Буква P
			document.getElementById("step2").innerHTML = "P";
				break;
         case 65:  // Буква A
			document.getElementById("step2").innerHTML = "A";
				break;
         case 83:  // Буква S
			document.getElementById("step2").innerHTML = "S";
				break;
         case 68:  // Буква D
			document.getElementById("step2").innerHTML = "D";
				break;
         case 70:  // Буква F
			document.getElementById("step2").innerHTML = "F";
				break;
         case 71:  // Буква G
			document.getElementById("step2").innerHTML = "G";
				break;
         case 72:  // Буква H
			document.getElementById("step2").innerHTML = "H";
				break;
         case 74:  // Буква J
			document.getElementById("step2").innerHTML = "J";
				break;
         case 75:  // Буква K
			document.getElementById("step2").innerHTML = "K";
				break;
         case 76:  // Буква L
			document.getElementById("step2").innerHTML = "L";
				break;
         case 90:  // Буква Z
			document.getElementById("step2").innerHTML = "Z";
				break;
         case 88:  // Буква X
			document.getElementById("step2").innerHTML = "X";
				break;
         case 67:  // Буква C
			document.getElementById("step2").innerHTML = "C";
				break;
         case 86:  // Буква V
			document.getElementById("step2").innerHTML = "V";
				break;
         case 66:  // Буква B
			document.getElementById("step2").innerHTML = "B";
				break;
         case 78:  // Буква N
			document.getElementById("step2").innerHTML = "N";
				break;
         case 77:  // Буква M
			document.getElementById("step2").innerHTML = "M";
				break;
    }	


    switch(step3){
         case 81:  // Буква Q
			document.getElementById("step3").innerHTML = "Q";
				break;
         case 87:  // Буква W
			document.getElementById("step3").innerHTML = "W";
				break;
         case 69:  // Буква E
			document.getElementById("step3").innerHTML = "E";
				break;
         case 82:  // Буква R
			document.getElementById("step3").innerHTML = "R";
				break;
         case 84:  // Буква T
			document.getElementById("step3").innerHTML = "T";
				break;
         case 89:  // Буква Y
			document.getElementById("step3").innerHTML = "Y";
				break;
         case 85:  // Буква U
			document.getElementById("step3").innerHTML = "U";
				break;
         case 73:  // Буква I
			document.getElementById("step3").innerHTML = "I";
				break;
         case 79:  // Буква O
			document.getElementById("step3").innerHTML = "O";
				break;
         case 80:  // Буква P
			document.getElementById("step3").innerHTML = "P";
				break;
         case 65:  // Буква A
			document.getElementById("step3").innerHTML = "A";
				break;
         case 83:  // Буква S
			document.getElementById("step3").innerHTML = "S";
				break;
         case 68:  // Буква D
			document.getElementById("step3").innerHTML = "D";
				break;
         case 70:  // Буква F
			document.getElementById("step3").innerHTML = "F";
				break;
         case 71:  // Буква G
			document.getElementById("step3").innerHTML = "G";
				break;
         case 72:  // Буква H
			document.getElementById("step3").innerHTML = "H";
				break;
         case 74:  // Буква J
			document.getElementById("step3").innerHTML = "J";
				break;
         case 75:  // Буква K
			document.getElementById("step3").innerHTML = "K";
				break;
         case 76:  // Буква L
			document.getElementById("step3").innerHTML = "L";
				break;
         case 90:  // Буква Z
			document.getElementById("step3").innerHTML = "Z";
				break;
         case 88:  // Буква X
			document.getElementById("step3").innerHTML = "X";
				break;
         case 67:  // Буква C
			document.getElementById("step3").innerHTML = "C";
				break;
         case 86:  // Буква V
			document.getElementById("step3").innerHTML = "V";
				break;
         case 66:  // Буква B
			document.getElementById("step3").innerHTML = "B";
				break;
         case 78:  // Буква N
			document.getElementById("step3").innerHTML = "N";
				break;
         case 77:  // Буква M
			document.getElementById("step3").innerHTML = "M";
				break;
    }	

function moveRect(e){
    switch(e.keyCode){
         case 81:  // Буква Q
		 if (step<5){
		 if (step==1 && step1==81) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==81) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==81) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1; score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else {
			score=score-100;
			combo=1;
			document.getElementById("score").innerHTML = score;
			}
			}
				break;
         case 87:  // Буква W
		 if (step<5){
		 if (step==1 && step1==87) {
			document.getElementById("step1").style.color = "green"; step=step+1;  combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==87) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==87) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 69:  // Буква E
		 if (step<5){
		 if (step==1 && step1==69) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==69) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==69) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 82:  // Буква R
		 if (step<5){
		 if (step==1 && step1==82) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==82) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==82) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 84:  // Буква T
		 if (step<5){
		 if (step==1 && step1==84) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==84) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==84) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 89:  // Буква Y
		 if (step<5){
		 if (step==1 && step1==89) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==89) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==89) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 85:  // Буква U
		 if (step<5){
		 if (step==1 && step1==85) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==85) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==85) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 73:  // Буква I
		 if (step<5){
		 if (step==1 && step1==73) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==73) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==73) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 79:  // Буква O
		 if (step<5){
		 if (step==1 && step1==79) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==79) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==79) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 80:  // Буква P
		 if (step<5){
		 if (step==1 && step1==80) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==80) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==80) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 65:  // Буква A
		 if (step<5){
		 if (step==1 && step1==65) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==65) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==65) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 83:  // Буква S
		 if (step<5){
		 if (step==1 && step1==83) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==83) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==83) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 68:  // Буква D
		 if (step<5){
		 if (step==1 && step1==68) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==68) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==68) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 70:  // Буква F
		 if (step<5){
		 if (step==1 && step1==70) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==70) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==70) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 71:  // Буква G
		 if (step<5){
		 if (step==1 && step1==71) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==71) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==71) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 72:  // Буква H
		 if (step<5){
		 if (step==1 && step1==72) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==72) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==72) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 74:  // Буква J
		 if (step<5){
		 if (step==1 && step1==74) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==74) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==74) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 75:  // Буква K
		 if (step<5){
		 if (step==1 && step1==75) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==75) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==75) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 76:  // Буква L
		 if (step<5){
		 if (step==1 && step1==76) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==76) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==76) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 90:  // Буква Z
		 if (step<5){
		 if (step==1 && step1==90) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==90) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==90) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 88:  // Буква X
		 if (step<5){
		 if (step==1 && step1==88) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==88) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==88) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 67:  // Буква C
		 if (step<5){
		 if (step==1 && step1==67) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==67) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==67) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 86:  // Буква V
		 if (step<5){
		 if (step==1 && step1==86) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==86) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==86) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 66:  // Буква B
		 if (step<5){
		 if (step==1 && step1==66) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==66) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==66) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 78:  // Буква N
		 if (step<5){
		 if (step==1 && step1==78) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==78) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==78) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 77:  // Буква M
		 if (step<5){
		 if (step==1 && step1==77) {
			document.getElementById("step1").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==2 && step2==77) {
			document.getElementById("step2").style.color = "green"; step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} else if (step==3 && step3==77) {
			document.getElementById("step3").style.color = "green"; 
			step=step+1; combo=combo+1;score=score+(100*combo); document.getElementById("score").innerHTML = score;
			} }
				break;
         case 32:  // Пробел
		 if (step<5){
		if(step == 4){
		responseTime = new Date(Date.now() + (400*10));
		rand1= Math.floor(Math.random() * 26);
		rand2= Math.floor(Math.random() * 26);
		rand3= Math.floor(Math.random() * 26);

		step1=arr[rand1];
		step2=arr[rand2];
		step3=arr[rand3];
		step=1;
		document.getElementById("step1").style.color = "blue";
		document.getElementById("step2").style.color = "blue";
		document.getElementById("step3").style.color = "blue";
		
		switch(step1){
         case 81:  // Буква Q
			document.getElementById("step1").innerHTML = "Q";
				break;
         case 87:  // Буква W
			document.getElementById("step1").innerHTML = "W";
				break;
         case 69:  // Буква E
			document.getElementById("step1").innerHTML = "E";
				break;
         case 82:  // Буква R
			document.getElementById("step1").innerHTML = "R";
				break;
         case 84:  // Буква T
			document.getElementById("step1").innerHTML = "T";
				break;
         case 89:  // Буква Y
			document.getElementById("step1").innerHTML = "Y";
				break;
         case 85:  // Буква U
			document.getElementById("step1").innerHTML = "U";
				break;
         case 73:  // Буква I
			document.getElementById("step1").innerHTML = "I";
				break;
         case 79:  // Буква O
			document.getElementById("step1").innerHTML = "O";
				break;
         case 80:  // Буква P
			document.getElementById("step1").innerHTML = "P";
				break;
         case 65:  // Буква A
			document.getElementById("step1").innerHTML = "A";
				break;
         case 83:  // Буква S
			document.getElementById("step1").innerHTML = "S";
				break;
         case 68:  // Буква D
			document.getElementById("step1").innerHTML = "D";
				break;
         case 70:  // Буква F
			document.getElementById("step1").innerHTML = "F";
				break;
         case 71:  // Буква G
			document.getElementById("step1").innerHTML = "G";
				break;
         case 72:  // Буква H
			document.getElementById("step1").innerHTML = "H";
				break;
         case 74:  // Буква J
			document.getElementById("step1").innerHTML = "J";
				break;
         case 75:  // Буква K
			document.getElementById("step1").innerHTML = "K";
				break;
         case 76:  // Буква L
			document.getElementById("step1").innerHTML = "L";
				break;
         case 90:  // Буква Z
			document.getElementById("step1").innerHTML = "Z";
				break;
         case 88:  // Буква X
			document.getElementById("step1").innerHTML = "X";
				break;
         case 67:  // Буква C
			document.getElementById("step1").innerHTML = "C";
				break;
         case 86:  // Буква V
			document.getElementById("step1").innerHTML = "V";
				break;
         case 66:  // Буква B
			document.getElementById("step1").innerHTML = "B";
				break;
         case 78:  // Буква N
			document.getElementById("step1").innerHTML = "N";
				break;
         case 77:  // Буква M
			document.getElementById("step1").innerHTML = "M";
				break;
    }

    switch(step2){
         case 81:  // Буква Q
			document.getElementById("step2").innerHTML = "Q";
				break;
         case 87:  // Буква W
			document.getElementById("step2").innerHTML = "W";
				break;
         case 69:  // Буква E
			document.getElementById("step2").innerHTML = "E";
				break;
         case 82:  // Буква R
			document.getElementById("step2").innerHTML = "R";
				break;
         case 84:  // Буква T
			document.getElementById("step2").innerHTML = "T";
				break;
         case 89:  // Буква Y
			document.getElementById("step2").innerHTML = "Y";
				break;
         case 85:  // Буква U
			document.getElementById("step2").innerHTML = "U";
				break;
         case 73:  // Буква I
			document.getElementById("step2").innerHTML = "I";
				break;
         case 79:  // Буква O
			document.getElementById("step2").innerHTML = "O";
				break;
         case 80:  // Буква P
			document.getElementById("step2").innerHTML = "P";
				break;
         case 65:  // Буква A
			document.getElementById("step2").innerHTML = "A";
				break;
         case 83:  // Буква S
			document.getElementById("step2").innerHTML = "S";
				break;
         case 68:  // Буква D
			document.getElementById("step2").innerHTML = "D";
				break;
         case 70:  // Буква F
			document.getElementById("step2").innerHTML = "F";
				break;
         case 71:  // Буква G
			document.getElementById("step2").innerHTML = "G";
				break;
         case 72:  // Буква H
			document.getElementById("step2").innerHTML = "H";
				break;
         case 74:  // Буква J
			document.getElementById("step2").innerHTML = "J";
				break;
         case 75:  // Буква K
			document.getElementById("step2").innerHTML = "K";
				break;
         case 76:  // Буква L
			document.getElementById("step2").innerHTML = "L";
				break;
         case 90:  // Буква Z
			document.getElementById("step2").innerHTML = "Z";
				break;
         case 88:  // Буква X
			document.getElementById("step2").innerHTML = "X";
				break;
         case 67:  // Буква C
			document.getElementById("step2").innerHTML = "C";
				break;
         case 86:  // Буква V
			document.getElementById("step2").innerHTML = "V";
				break;
         case 66:  // Буква B
			document.getElementById("step2").innerHTML = "B";
				break;
         case 78:  // Буква N
			document.getElementById("step2").innerHTML = "N";
				break;
         case 77:  // Буква M
			document.getElementById("step2").innerHTML = "M";
				break;
    }	


    switch(step3){
         case 81:  // Буква Q
			document.getElementById("step3").innerHTML = "Q";
				break;
         case 87:  // Буква W
			document.getElementById("step3").innerHTML = "W";
				break;
         case 69:  // Буква E
			document.getElementById("step3").innerHTML = "E";
				break;
         case 82:  // Буква R
			document.getElementById("step3").innerHTML = "R";
				break;
         case 84:  // Буква T
			document.getElementById("step3").innerHTML = "T";
				break;
         case 89:  // Буква Y
			document.getElementById("step3").innerHTML = "Y";
				break;
         case 85:  // Буква U
			document.getElementById("step3").innerHTML = "U";
				break;
         case 73:  // Буква I
			document.getElementById("step3").innerHTML = "I";
				break;
         case 79:  // Буква O
			document.getElementById("step3").innerHTML = "O";
				break;
         case 80:  // Буква P
			document.getElementById("step3").innerHTML = "P";
				break;
         case 65:  // Буква A
			document.getElementById("step3").innerHTML = "A";
				break;
         case 83:  // Буква S
			document.getElementById("step3").innerHTML = "S";
				break;
         case 68:  // Буква D
			document.getElementById("step3").innerHTML = "D";
				break;
         case 70:  // Буква F
			document.getElementById("step3").innerHTML = "F";
				break;
         case 71:  // Буква G
			document.getElementById("step3").innerHTML = "G";
				break;
         case 72:  // Буква H
			document.getElementById("step3").innerHTML = "H";
				break;
         case 74:  // Буква J
			document.getElementById("step3").innerHTML = "J";
				break;
         case 75:  // Буква K
			document.getElementById("step3").innerHTML = "K";
				break;
         case 76:  // Буква L
			document.getElementById("step3").innerHTML = "L";
				break;
         case 90:  // Буква Z
			document.getElementById("step3").innerHTML = "Z";
				break;
         case 88:  // Буква X
			document.getElementById("step3").innerHTML = "X";
				break;
         case 67:  // Буква C
			document.getElementById("step3").innerHTML = "C";
				break;
         case 86:  // Буква V
			document.getElementById("step3").innerHTML = "V";
				break;
         case 66:  // Буква B
			document.getElementById("step3").innerHTML = "B";
				break;
         case 78:  // Буква N
			document.getElementById("step3").innerHTML = "N";
				break;
         case 77:  // Буква M
			document.getElementById("step3").innerHTML = "M";
				break;
    }	
		}
		}
				break;
    }
}

addEventListener("keydown", moveRect);