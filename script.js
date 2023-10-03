// Questions that will be asked
const Questions = [{
	q: "What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?",
	a: [{ text: "1910", isCorrect: false },
	{ text: "1916", isCorrect: false },
	{ text: "1912", isCorrect: true },
	{ text: "1915", isCorrect: false }
	]

},
{
	q: "What is the name of the biggest technology company in South Korea?",
	a: [{ text: "Nokia", isCorrect: false },
	{ text: "Samsung", isCorrect: true },
	{ text: "Redmi", isCorrect: false },
	{ text: "Apple", isCorrect: false }
	]

},
{
	q: " How many breaths does the human body take daily?",
	a: [{ text: "10,000", isCorrect: false },
	{ text: "30,000", isCorrect: false },
	{ text: "20,000", isCorrect: true },
	{ text: "40,000", isCorrect: false }
	]

},
{
	q: "What is the largest species of shark?",
	a: [{ text: "Great White Shark", isCorrect: false },
		{ text: "Whale Shark", isCorrect: true },
		{ text: "Blue Shark", isCorrect: false },
		{ text: "Grey Shark", isCorrect: false }
	]
},
{
	q: "In which year was The Godfather first released?",
	a: [{ text: "1972", isCorrect: true },
		{ text: "1973", isCorrect: false },
		{ text: "1974", isCorrect: false },
		{ text: "1975", isCorrect: false }
		]
},
{
	q: "What is the chemical symbol for gold?",
	a: [{ text: "Cu", isCorrect: false },
		{ text: "Au", isCorrect: true },
		{ text: "Ag", isCorrect: false },
		{ text: "Fe", isCorret: false }
	]
},
{
	q: "Who painted the Mona Lisa?",
	a: [{ text: "Pablo Picasso", isCorrect: false },
		{ text: "Michelangelo", isCorrect: false },
		{ text: "Vincent van Gogh", isCorrect: false },
		{ text: "Leonardo da Vinci", isCorrect: true }
		]
},
{
	q: "Which is the largest ocean on Earth?",
	a: [{ text: "Indian Ocean", isCorrect: false },
		{ text: "Pacific Ocean", isCorrect: true },
		{ text: "Arctic Ocean", isCorrect: false },
		{ text: "Atlantic Ocean", isCorrect: false }
		]
},
{
	q: "What is the captial of France?",
	a: [{ text: "Paris", isCorrect: true },
		{ text: "Brazil", isCorrect: false },
		{ text: "Australia", isCorrect: false },
		{ text: "India", isCorrect: false }
		]
},
{
	q: "In what year did the Berlin Wall fall?",
	a: [{ text: "1989", isCorrect: true },
		{ text: "1990", isCorrect: false },
		{ text: "1987", isCorrect: false },
		{ text: "1985", isCorrect: false }
		]
}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
