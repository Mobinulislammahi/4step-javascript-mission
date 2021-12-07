

		// challenge 1
		document.getElementById("btn").addEventListener("click", function(){	

			var birthday = prompt("Enter your Date of birth year");		
			var agedays = (2021 - birthday);
  			var yetk = document.getElementById("result");
			  var msg = document.getElementById("message")
		
				yetk.innerHTML = "Your age is " + agedays;		  
			  
		});
		//challenge 2
		function generate(){
				var img = new Image();
				var div = document.getElementById("generate-img");
				img.src = "image/1.jpg";
				for(var i= 0; i<10; i++){
					div.appendChild(img);

				}
		} 
		
		// challenge 4
		var allbtn = document.getElementsByTagName('button');

		var copybtn = [];
		for(let i = 0; i<allbtn.length; i++){
			copybtn.push(allbtn[i].classList[1]);
		}
		function btncolorchange(buttonThingy){
			if(buttonThingy.value == 'red'){
				buttonred();
			}
			else if(buttonThingy.value == 'green'){
				buttongreen();
			}
			else if(buttonThingy.value == 'random'){
				buttonrandom();
			}
			else if(buttonThingy.value == 'reset'){
				buttonreset();
			}
		}
function buttonred(){
	for(let i = 0; i<allbtn.length; i++){
		allbtn[i].classList.remove(allbtn[i].classList[1]);
			allbtn[i].classList.add("btn-twitter")
	}
}
function buttongreen(){
	for(var i =0; i<allbtn.length; i++){
		allbtn[i].classList.remove(allbtn[i].classList[1]);
		allbtn[i].classList.add("btn-yahoo");
	}
}
function buttonrandom(){
	var choices = ["btn-primary", "btn-google", "btn-yahoo", "btn-twitter"]
	for (let i = 0; i<allbtn.length; i++){
		let randmoNumber = Math.floor(Math.random()*4);
		allbtn[i].classList.remove(allbtn[i].classList[1]);
		allbtn[i].classList.add(choices[randmoNumber])
	}
}
function buttonreset(){
	for(var i = 0; i<allbtn.length; i++){
		allbtn[i].classList.remove(allbtn[i].classList[1]);
		allbtn[i].classList.add(copybtn[i])
	}
}




// var num1 = prompt("Enter your first number")
// var num2 = prompt("Enter your last number")
// var max = Math.max(num1, num2)
	
// 	document.write("Maximum is "+ max)
// function rpsGame1(){
// 	concole.log("This is Rock")
// }
// function rpsGame2(){
// 	concole.log("This is Paper")
// }s
// function rpsGame(){
// 	concole.log("This is sissor")
// }

// 	for(let x = 0; x<5; x++){
// 	var choiced = prompt("Enter your number");
// 	let rndmnumbr = Math.ceil(Math.random()*5);
// 	if(choiced==rndmnumbr){
// 		console.log("You are win")
// 	}
// 	else(
// 		console.log("you are fail")
// 	)
// }