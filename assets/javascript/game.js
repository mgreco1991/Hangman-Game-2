$(document).ready(function() {
	
	//create the array of possible words, animal-themed	

	var animals = ["lion", "cat", "monkey", "elephant", "frog", "hyena", "mouse", "owl", "seal", "otter", "snake", 
	"whale", "wolf", "dog", "cow", "horse", "pig", "sheep", "bumblebee", "dolphin"];

	//set the current word to a random word from the "animals" array, according to the length of the array

	var currentWord = animals[Math.floor(animals.length*Math.random())];
	console.log(currentWord);

	//get the current word and display it as underscores on the screen in the divbox displayCurrentWord
	//make a new array called hiddenWord, iterate through the length of the current word, and push a spaced underscore
	//in place of each index for as long as that loop iterates

	var hiddenWord =[];

	for (var i = 0; i < currentWord.length; i++) {
		hiddenWord.push("_");
	}

	var wins = 0;

	var guessesRemaining = 10;

	function resetGame(){

		$("#displayAnimal").empty();
		animals = ["lion", "cat", "monkey", "elephant", "frog", "hyena", "mouse", "owl", "seal", "otter", "snake",
		"whale", "wolf", "dog", "cow", "horse", "pig", "sheep", "bumblebee", "dolphin"];
		currentWord = animals[Math.floor(animals.length*Math.random())];
		hiddenWord = [];
		for (var i = 0; i < currentWord.length; i++) {
		hiddenWord.push("_");
		$("#displayCurrentWord").empty();
		$( "#displayCurrentWord" ).append( hiddenWord.join(" ") ); 
		guessesRemaining = 10;
		$("#displayLettersGuessed").empty();
		$("#displayGuessesRemaining").text(guessesRemaining);

		

	}
}



	//code for game

	if (guessesRemaining > 0) {

		//append the hidden word, joined together with spaces, to the divbox underneath the "current word" heading in the browser

		$( "#displayCurrentWord" ).append( hiddenWord.join(" ") ); 

		//display the number of wins in its divbox

		$( "#displayWins" ).text( wins ); 

		//display the number of guesses/chances that the user has remaining in its divbox

		$( "#displayGuessesRemaining" ).text( guessesRemaining );

		//when the user presses a key... 

		$(document).keypress(function(event) {

			var letterGuessed = event.key;

			//...display the guessesRemaining in the divbox

			$( "#displayGuessesRemaining" ).text( guessesRemaining );

			//...it decreases by one on every keystroke, regardless of whether the letter was a match or not

			guessesRemaining--;

 			
 			//If there is a matching index...
 			if (currentWord.indexOf(letterGuessed) != -1) {

				//iterate through the word and pinpoint that index
				for (var i = 0; i < currentWord.length; i++){

					//if the index of currentWord is equal to the keypress...
					if (currentWord[i] === letterGuessed){

						//assign the index of hiddenWord to that of currentWord
						hiddenWord[i] = currentWord[i];

						//append to the HTML div
						$( "#displayCurrentWord" ).html( "<span>" + hiddenWord + "</span>" );
						
					}			
						
				}
						
					
			}else{

				$( "#displayLettersGuessed" ).append( letterGuessed + " " );

				}   // end of else
				
				//if ALL lettersGuessed are filled in, display image and play sound mp3
				
				if (hiddenWord.indexOf("_") == -1){



					var youWon = confirm("Congratulations! You win! Play again?");

					if(youWon){
						if(currentWord == "lion"){

						$( "#displayAnimal" ).append('<img id="lion" src="assets/images/lion.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/lion.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "cat"){

						$( "#displayAnimal" ).append('<img id="cat" src="assets/images/cat.jpeg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/animal_cat_meow.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "cow"){

						$( "#displayAnimal" ).append('<img id="cow" src="assets/images/cow.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/Blastwave_FX_CowMoo_SFXB.214.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "dog"){

						$( "#displayAnimal" ).append('<img id="dog" src="assets/images/dog.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/bark.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "dolphin"){

						$( "#displayAnimal" ).append('<img id="dolphin" src="assets/images/dolphin.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/zapsplat_animals_shark_or_dolphin_splash_surface_water_13502.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "elephant"){

						$( "#displayAnimal" ).append('<img id="elephant" src="assets/images/elephant.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/elephant9.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "frog"){

						$( "#displayAnimal" ).append('<img id="frog" src="assets/images/frog.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/ftus_frogs_very_distant_faint_dog_vietnam.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "horse"){

						$( "#displayAnimal" ).append('<img id="horse" src="assets/images/horse.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/Blastwave_FX_HorseClydesdale_S011AN.55.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "hyena"){


						$( "#displayAnimal" ).append('<img id="hyena" src="assets/images/hyena.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/hyena1.mp3");
      					audioElement.play();
      					alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "monkey"){

						$( "#displayAnimal" ).append('<img id="monkey" src="assets/images/monkey.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/monkey1.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "mouse"){

						$( "#displayAnimal" ).append('<img id="mouse" src="assets/images/mouse.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/zapsplat_animal_rodent_squeak_single_001.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "otter"){

						$( "#displayAnimal" ).append('<img id="otter" src="assets/images/otter.jpg">');
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "owl"){

						$( "#displayAnimal" ).append('<img id="owl" src="assets/images/owl.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/OWL3.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "pig"){

						$( "#displayAnimal" ).append('<img id="pig" src="assets/images/pig.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/ofarm.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "seal"){

						$( "#displayAnimal" ).append('<img id="seal" src="assets/images/seal.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/seal.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "sheep"){

						$( "#displayAnimal" ).append('<img id="sheep" src="assets/images/Sheep.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/animal_sheep_baa.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "snake"){

						$( "#displayAnimal" ).append('<img id="snake" src="assets/images/snake.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/snakehiss2.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "whale"){

						$( "#displayAnimal" ).append('<img id="whale" src="assets/images/whale.png">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/Whale2.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "wolf"){

						$( "#displayAnimal" ).append('<img id="wolf" src="assets/images/wolf.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/wolf8.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
					}
					else if(currentWord == "bumblebee"){
						$( "#displayAnimal" ).append('<img id="bumblebee" src="assets/images/bumblebee.jpg">');
						var audioElement = document.createElement("audio");
      					audioElement.setAttribute("src", "assets/sounds/kevin_boucher_animals_insects_honeybees_buzz_around_hive.mp3");
      					audioElement.play();
						alert("click the animal to play again!");
						$( "#displayAnimal").on("click", function(){
							resetGame();
						});
						
					}


					console.log(currentWord);
					wins++;
					$("#displayWins").text(wins);
				}
				
					else{
						alert("Thanks for playing - see you next time!");
					}
				

				}else if (guessesRemaining <= -1){

					var gameRestart = confirm("Oh no--you've lost! Try again?");

					if(gameRestart){
						resetGame();
					}else{
						alert("Thanks for playing - see you next time!")
					}
				}
			});
		}

		});

		


