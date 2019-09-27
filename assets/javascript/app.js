var questions = [
	{q: "On which planet do the Ewoks live?", a0: "Naboo", a1: "Hoth", a2: "Mustarfar", a3: "Endor", correct: 3},
	{q: "What color is Mace Windu's lightsaber?", a0: "Green", a1: "Red", a2: "Purple", a3: "Blue", correct: 2},
	{q: "How fast could the Millenium Falcon make the Kessel Run?", a0: "5 parsecs", a1: "12 parsecs", a2: "7 parsecs", a3: "23 parsecs", correct: 1},
	{q: "Who's DNA did the Kaminoans copy to create a clone army?", a0: "Greedo", a1: "Yoda", a2: "Count-Dooku", a3: "Jango Fett", correct: 3},
	{q: "Is Jar Jar Binks a sith lord?", a0: "No", a1: "Meesa sith lord", a2: "Too clumsy", a3: "I really hope not", correct: 1 }
];

var currentQuestion = 0;
var timerInterval;

function loadQuestion(){
	if(timerInterval){
		clearInterval(timerInterval);
	}
	document.getElementById("question").textContent = questions[currentQuestion].q;
	document.getElementById("answer-list").innerHTML = `<input type="radio" onclick="answer(0)">` + questions[currentQuestion].a0 + `</input><input type="radio" onclick="answer(1)">` + questions[currentQuestion].a1 + `</input><input type="radio" onclick="answer(2)">` + questions[currentQuestion].a2 + `</input><input type="radio" onclick="answer(3)">` + questions[currentQuestion].a3 + `</input>`;
	document.getElementById("time").textContent = "10";
	timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer(){
	var time = Number(document.getElementById("time").textContent) - 1;
	if(time === 0){
		alert("Your powers are weak old man.");
		clearInterval(timerInterval);
	}

	document.getElementById("time").textContent = time;
}

function answer(a){
	if(a === questions[currentQuestion].correct){
		if(currentQuestion < (questions.length - 1)){
			currentQuestion++;
			loadQuestion();
		}else{
			alert("The force is strong with this one.");
		}
	}else{
		alert("You know not the ways of the force.");
	}
}

loadQuestion();