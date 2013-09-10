$(document).ready(function(){
	var secretNumber = parseInt(Math.random() * 100, 10) + 1;
	var num_guess = 3;
	var games_won = 0;
	var land_mine = [];

	var choose_land_mines = function(){
		current_rand = [parseInt(Math.random() * 100, 10) + 1];

		for(var i = 0; i < 3; ){
			current_rand = [parseInt(Math.random() * 100, 10) + 1];
			if(land_mine.indexOf(current_rand) === -1){
				land_mine.push(current_rand.toString());
				i++;
				console.log(current_rand + " added!");
			}
		}

	}

	function guess(){
		var answer = $('#user-input').val();
		// var land_mine_diff = answer > land_mine ? answer - land_mine : land_mine - answer;
		var land_mine_diff = 100;
		var current_land_mine_diff = 0;

		for(var i = 0; i < land_mine.length; i++){
			current_land_mine_diff = answer > land_mine[i] ? answer - land_mine[i] : land_mine[i] - answer;
			if(land_mine_diff > current_land_mine_diff){
				land_mine_diff = current_land_mine_diff;
			};
		};

		if(num_guess > 1){
			num_guess -= 1;
			if(answer === secretNumber.toString()){
				games_won += 1;
				$('#response').text("Congratulations you guessed correctly!");
				$('#games-won').text("Woohoo you won " + games_won + " games!!");
			}
			else if(land_mine.indexOf(answer) != -1){
				$('#response').text("OH NOES you landed on the land mine!!!!!");
				$("#land_mine").text("You LOSE!!!!");
				num_guess = 0;
			}
			else if(answer < secretNumber){
				$('#response').text('Your hot! Guess higher! You have ' + (num_guess) + " guesses left!");
				$("#land_mine").text("Careful you're " + land_mine_diff + " away from the land mine");
			}
			else if(answer > secretNumber){
				$('#response').text('Your hot! Guess lower! You have ' + (num_guess) + " guesses left!");
				$("#land_mine").text("Careful you're " + land_mine_diff + " away from the land mine");
			}
			else{
				$('#response').text("Sorry, that's not a number!");
			}
		}
		else{
			$('#response').text("Sorry, you ran out of guesses, the secretNumber was " + secretNumber + ".");
		};

	};

	function restart(){
		num_guess = 3;
		$('#response').text("Okay here we go again! You have " + num_guess + " gueses!");
		$('#user-input').val("");
		secretNumber = parseInt(Math.random() * 100, 10) + 1;
		alert(secretNumber + " " + land_mine);
	};

	choose_land_mines();
	alert(secretNumber + " land mines: " + land_mine.toString());

	$('#response').text('You have ' + num_guess + ' guesses');
	$('#restart-button').on('click', restart);
	$('#submit-button').on('click', guess);
});