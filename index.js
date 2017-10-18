const QUESTIONS = 
[
{question: 'Who is this?', a: "Jango Fett", b: "Sabine Wren", c: "Boba Fett", d: "Han Solo", correct: "Boba Fett",
pic: "https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/1bf9bf86-a3fa-4399-bd63-cb098eb0bc7e.jpg", alternate:"A bounty hunter pointing a gun."},

{question: "Darth Vader is whose father?", a: "Anakin Skywalker", b: "Jacen Solo", c: "Obi Wan Kenobi", d: "Luke Skywalker", correct: "Luke Skywalker",
pic: "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2017/05/darth-vader-a-new-hope-1.jpg", alternate: "A picture of Darth Vader"},

{question: "What does TIE in TIE Fighter stand for?", a: "Twin Ion Engine", b: "Turbo Infused Engine", c: "Tectonic Intrinsic Engine", d: "Twin Injection Engine", correct: "Twin Ion Engine",
pic: "https://squir.com/40896/star-wars-tie-fighter-with-interior.jpg", alternate: "A picture of a TIE Fighter in space"},

{question: "What color is Obi Wan's lightsaber?", a: "red", b: "blue", c: "green", d: "yellow", correct: "blue",
pic: "https://i.pinimg.com/474x/48/8d/20/488d20cd9f55b5963fab42bb863a90be--star-wars-lightsaber-color-meanings.jpg", alternate: "A row of lightsabers of various colors"},

{question: "What planet is Luke Skywalker from?", a: "Tatooine", b: "Coruscant", c: "Dagobah", d: "Hoth", correct: "Tatooine",
pic: "http://14544-presscdn-0-64.pagely.netdna-cdn.com/wp-content/uploads/2012/12/LukeSkywalkerLightsaber2.jpg", alternate: "A picture of Luke Skywalker holding a lightsaber"},

{question: "Who is Leia's adoptive father?", a: "Anakin Skywalker", b: "Obi Wan Kenobi", c: "Bail Organa", d: "Han Solo", correct: "Bail Organa",
pic: "http://i1.mirror.co.uk/incoming/article6819249.ece/ALTERNATES/s615/MAIN-Princess-Leia-changed-name-in-new-Star-Wars.jpg", alternate: "A picture of Princess Leia"},

{question: "What ship is depicted?", a: "Slave I", b: "Millenium Falcon", c: "X-Wing", d: "TIE Fighter", correct: "Millenium Falcon",
pic: "http://cdn.shopify.com/s/files/1/1257/6291/products/Falcon---Top-Left_grande.png?v=1472005137", alternate: "A picture of a space craft flying over a planet." },

{question: "Where was the first rebel base located?", a: "Yavin IV", b: "Coruscant", c: "Hoth", d: "Corellia", correct: "Yavin IV",
pic: "https://res.cloudinary.com/teepublic/image/private/s--c2RD8KBM--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1458842231/production/designs/456959_1.jpg", alternate: "The symbol of the rebellion"},

{question: "Who's DNA was the template for the clone army of the republic?", a: "Boba Fett", b: "Mace Windu", c: "Jango Fett", d: "Hugo Varr", correct: "Jango Fett",
pic: "https://qph.ec.quoracdn.net/main-qimg-ada584ab87f85729415835defa492e50-c", alternate: "A picture of Commander Cody, a clone trooper"},

{question: "What planet is Darth Maul from?", a: "Dathomir", b: "Iridonia", c: "Coruscant", d: "Nar Shadda", correct: "Dathomir",
pic: "https://lumiere-a.akamaihd.net/v1/images/Darth-Maul_632eb5af.jpeg?region=75%2C42%2C1525%2C858&width=768", alternate: "A picture of the zabrak Darth Maul"}
];

pageCount = 0;
score = 0;

/*begins the quiz
  hides the intro
  reveals the questions*/
 function Start()
{
	$('.intro').on('click', '.start', function(event)  
	{												   
		$('.question').show();						   
		$('.intro').hide();
		$('.js-question-text').text(QUESTIONS[0].question);
		$('.js-picture').attr('src', QUESTIONS[0].pic);
		$('.js-picture').attr('alt', QUESTIONS[0].alternate);
		$('.a-answer').text(QUESTIONS[0].a);
		$('.b-answer').text(QUESTIONS[0].b);
		$('.c-answer').text(QUESTIONS[0].c);
		$('.d-answer').text(QUESTIONS[0].d);

		$('.score-text').text(`${score}/10`);
		console.log(`score is: ${score}`);

		$('.question-tracker-text').text(`Question ${pageCount +1}/10`);

		$(".js-next").hide();
		$('.reset').show();
	})
	
}

function Restart()
{
	//resets the quiz
		//sets the page count to 0
		//hides the questions
		//unhides the intro
		//resets score
		$('.reset').on('click', '.reset-button', function (event)
		{
			$('.question').hide();
			$('.intro').show();
			pageCount=0;
			score=0;
			$('.finish').hide();
			$('.reset').hide();
		});
		
}

function Next()
{

	console.log(pageCount);
	//loads the next set of questions
	if(pageCount < 9)
	{
		$('.js-question-text').text(QUESTIONS[pageCount+1].question);
		$('.js-picture').attr('src', QUESTIONS[pageCount+1].pic);
		$('.js-picture').attr('alt', QUESTIONS[pageCount+1].alternate);
		$('.a-answer').text(QUESTIONS[pageCount+1].a);
		$('.b-answer').text(QUESTIONS[pageCount+1].b);
		$('.c-answer').text(QUESTIONS[pageCount+1].c);
		$('.d-answer').text(QUESTIONS[pageCount+1].d);
	}
	else
	{
		$('.question').hide();
		$('.finish').show();

		$('.finsish-text').text(`Congrats you finished!!  Your score is: ${score}/10`);
	}

	pageCount++;

	$('.correct-answer').hide();

	$('.question-tracker-text').text(`Question ${pageCount +1}/10`);
}

function handleNext()
{
	$('.next').on('click', '.js-next', function(event)
	{
		console.log("next was clicked");
		Next();
		AnswerReset();
		$('.js-next').hide();

		/*if(pageCount === 10)
		{
			$('.question').hide();
			$('.finish').show();

			$('.finish-text').text(`Congrats you finished!!  Your score is: ${score}/10`);
		}*/
	})
}

function UpdateScore()
{
	//if the user got the answer correct the score should increment
	score++;
	$('.score-text').text(`${score}/10`);

}

function IncorrectAnswer()
{
	$('.correct-answer').show();
	$(".correct-answer-text").text(`Sorry but the correct answer is ${QUESTIONS[pageCount].correct}.`);
}

/*function AnswerQuestion()
{
	$('.js-answers').on('click', 'button span', function (event)
	{
		console.log($(this).attr('class'));

		let anser = "."+$(this).attr('class');

		if($(anser).text() === QUESTIONS[pageCount].correct)
		{	
			UpdateScore();
			$(anser).toggleClass('correct');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
		}
		else
		{
			$(anser).toggleClass('incorrect');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
			IncorrectAnswer();
		}
	})
}*/


function AnswerQuestion()
{
	//takes the user input and checks for a correct answer
	
	console.log(`i is ${pageCount}`);
	$('.js-answers').on('click', '.answer-a', function (event)
	{
		
		if($('.a-answer').text() === QUESTIONS[pageCount].correct)
		{
			UpdateScore();
			$('.a-answer').toggleClass('correct');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
		}
		else
		{
			$('.a-answer').toggleClass('incorrect');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
			IncorrectAnswer();
		}
	})

	$('.js-answers').on('click', '.answer-b', function (event)
	{
		
		if($('.b-answer').text() === QUESTIONS[pageCount].correct)
		{			
			UpdateScore();
			$('.b-answer').toggleClass('correct');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
		}
		else
		{
			$('.b-answer').toggleClass('incorrect');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
			IncorrectAnswer();
		}
	})

	$('.js-answers').on('click', '.answer-c', function (event)
	{
		
		if($('.c-answer').text() === QUESTIONS[pageCount].correct)
		{			
			UpdateScore();
			$('.c-answer').toggleClass('correct');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
		}
		else
		{
			$('.c-answer').toggleClass('incorrect');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
			IncorrectAnswer();
		}
	})

	$('.js-answers').on('click', '.answer-d', function (event)
	{
		
		if($('.d-answer').text() === QUESTIONS[pageCount].correct)
		{			
			UpdateScore();
			$('.d-answer').toggleClass('correct');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
		}
		else
		{
			$('.d-answer').toggleClass('incorrect');
			$(".js-next").show();
			$('.but-answer').prop({disabled: true});
			IncorrectAnswer();
		}
	})


}

function AnswerReset()
{
	if($('.a-answer').hasClass('correct'))
	{
		$('.a-answer').toggleClass('correct');
	}
	else if($('.a-answer').hasClass('incorrect'))
	{
		$(".a-answer").toggleClass('incorrect');
	}

	if($('.b-answer').hasClass('correct'))
	{
		$('.b-answer').toggleClass('correct');
	}
	else if($('.b-answer').hasClass('incorrect'))
	{
		$(".b-answer").toggleClass('incorrect');
	}

	if($('.c-answer').hasClass('correct'))
	{
		$('.c-answer').toggleClass('correct');
	}
	else if($('.c-answer').hasClass('incorrect'))
	{
		$(".c-answer").toggleClass('incorrect');
	}

	if($('.d-answer').hasClass('correct'))
	{
		$('.d-answer').toggleClass('correct');
	}
	else if($('.d-answer').hasClass('incorrect'))
	{
		$(".d-answer").toggleClass('incorrect');
	}

	$(".but-answer").prop({disabled: false});
}

function RunIt()
{
	$('.question').hide();
	$('.correct-answer').hide();
	$('.finish').hide();
	$('.reset').hide();
	Start();
	handleNext();
	AnswerQuestion();
	Restart();
}

$(RunIt());