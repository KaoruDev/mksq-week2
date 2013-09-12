$(document).ready(function () {
	var games_won = 0;

	window.Game = function(mines){
		this.secretNumber = parseInt(Math.random() * 100, 10) + 1;
		this.num_guess = 3;
		
		this.land_mine = [];
		this.mines = mines === undefined ? true : false;


		this.guess = function(answer){

			var closest_mine = 100;
			var current_diff = 0;

			if(answer){

			}else{
				answer = input = $('#user-input').val();
			}


			if(this.num_guess > 1){
				this.num_guess -= 1;
				if(answer === this.secretNumber.toString()){
					games_won += 1;
					$('#response').text("Congratulations you guessed correctly!");
					$('#games-won').text("Woohoo you won " + games_won + " games!!");
				}
				else if(this.land_mine.indexOf(answer) != -1){
					$('#response').text("OH NOES you landed on the land mine!!!!!");
					$("#land_mine").text("You LOSE!!!!");
					this.num_guess = 0;
				}
				else if(answer < this.secretNumber){
					$('#response').text('Your hot! Guess higher! You have ' + this.num_guess + " guesses left!");
				}
				else if(answer > this.secretNumber){
					$('#response').text('Your hot! Guess lower! You have ' + this.num_guess + " guesses left!");
				}
				else{
					$('#response').text("Sorry, that's not a number!");
				}
			}
			else{
				$('#response').text("Sorry, you ran out of guesses, the secret number was " + this.secretNumber + ".");
			};

			if(this.mines){
				for(var i = 0; i < this.land_mine.length; i++){
					current_diff = answer > this.land_mine[i] ? answer - this.land_mine[i] : this.land_mine[i] - answer;
					if(closest_mine > current_diff){
						closest_mine = current_diff;
					};
				};
			$("#land_mine").text("Careful you're " + Math.abs(closest_mine) + " away from the land mine");	
			};
		};


		this.choose_land_mines = function(){
			current_rand = [parseInt(Math.random() * 100, 10) + 1];

			for(var i = 0; i < 3; ){
				current_rand = [parseInt(Math.random() * 100, 10) + 1];
				if(this.land_mine.indexOf(current_rand) === -1 && current_rand != this.secretNumber){
					this.land_mine.push(current_rand.toString());
					i++;
					console.log(current_rand + " added!");
				}
			}
		};

		this.restart = function(){
			console.log(this);
			this.land_mine = [];
			window.game.num_guess = 3;
			if($("#minesCheckBox").is(':checked')){
				window.game.mines = true;
				window.game.choose_land_mines();
			}else{
				window.game.mines = false;
			};
			$("#land_mine").text("");
			$('#response').text("Okay here we go again! You have " + window.game.num_guess + " gueses!");
			$('#user-input').val("");
			window.game.secretNumber = parseInt(Math.random() * 100, 10) + 1;
			alert(window.game.secretNumber + " land mines: " + window.game.land_mine);
		}
	};

	
	window.game = new window.Game();

	window.game.choose_land_mines();
	alert(window.game.secretNumber + " land mines: " + window.game.land_mine.toString());

	$('#response').text('You have ' + game.num_guess + ' guesses');
	$('#restart-button').on('click', window.game.restart);
	$('#submit-button').on('click', function(){
		var input = $('#user-input').val();
		window.game.guess(input);
	});
});
