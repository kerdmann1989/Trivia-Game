var questions = [
    {
        question: "In Snow White, Which phrase does the Evil Queen say?",
        option1: "Mirror, mirror, on the wall - who is the fairest of them all?",
        option2: "Magic mirror, on the wall - who is the fairest one of all?",
        option3: "Mirror, mirror, on the wall - who is the fairest one of all?",
        option4: "Magic mirror, on the wall - who is the fairest of them all?",
        answer: 2,
    },
    {
        question: "What is the name of Maleficent's pet Raven?",
        option1: "Diablo",
        option2: "Malum",
        option3: "Mauvais",
        option4: "Diable",
        answer: 1
    },
    {
        question: "What is the name of Merlin's pet Owl in 'The Sword in the Stone'?",
        option1: "Aristotle",
        option2: "Socrates",
        option3: "Archimedes",
        option4: "Plato",
        answer: 3
    },
    {
        question: "What year did Disneyland open?",
        option1: "1954",
        option2: "1959",
        option3: "1955",
        option4: "1960",
        answer: 3
    },
    {
        question: "In 'The Little Mermaid' what name does Ursula use when she becomes human?",
        option1: "Vanessa",
        option2: "Sarah",
        option3: "Veronica",
        option4: "Alexis",
        answer: 1
    },
    {
        question: "In 'Toy Story' what game does Slinky play?",
        option1: "Chutes & Ladders",
        option2: "Checkers",
        option3: "Chess",
        option4: "Battleship",
        answer: 2
    },
    {
        question: "What is Boo's real name (from 'Monsters Inc.')?",
        option1: "Olive",
        option2: "Jenny",
        option3: "Mary",
        option4: "Eva",
        answer: 3
    },
    {
        question: "Which of the following is not one of the good faires from Sleeping Beauty?",
        option1: "Flora",
        option2: "Fauna",
        option3: "Merryweather",
        option4: "Marion",
        answer: 4
    },
    {
        question: "How many years has the Genie been trapped in the lamp?",
        option1: "10,000 years",
        option2: "5,000 years",
        option3: "1,000 years",
        option4: "100 years",
        answer: 1
    },
    {
        question: "What is the name of Goofy's son?",
        option1: "Goofy, Jr.",
        option2: "Mel",
        option3: "Pete",
        option4: "Max",
        answer: 4
        
    
    }];
    
    var currentQuestion = 0;
    var score = 0;
    var incorrect = 0;
    var totQuestions = questions.length;
    
    function startGame () {
        number = 30;
    }
    
    $("body").on("click", ".startButton", function(event){
        event.preventDefault();  
        startGame()
        run();
        $("#wrapper").show();
        $("#instructions").hide();
        $(".startButton").hide();
    });
    
    
    function loadQuestion(questionIndex) {
        var q = questions[questionIndex];
        $("#question").html("&nbsp &nbsp" + q.question);
        console.log(currentQuestion)
        $("#opt1").text(q.option1);
        $("#opt2").text(q.option2);
        $("#opt3").text(q.option3);
        $("#opt4").text(q.option4);
        $("#image").html(q.image);
    console.log(q.image)
    };
    
    function loadNextQuestion () {
        var selectedOptions = document.querySelector("input[type=radio]:checked");
        if(!selectedOptions) {
            alert("Please select your answer");
            return;
        }
        var answer = selectedOptions.value;
        if(questions[currentQuestion].answer == answer) {
            score++;
        } else if (questions[currentQuestion].answer !== answer) {
            incorrect++
        }
        selectedOptions.checked=false;
        currentQuestion++;
        if(currentQuestion == totQuestions - 1) {
            $("#nextButton").text("Finish");
        }
        
        if(currentQuestion == totQuestions) {  
            $("#quizContainer").hide();
            stop();
            $("#result").text("You got " + score + " correct " + "and " + incorrect + " incorrect.")
            return;
        
        }
        loadQuestion(currentQuestion);
    }
    // startGame();
    loadQuestion(currentQuestion);
    
    function endGame() {
        $("#quizContainer").hide();
        stop();
        $("#result").text("You got " + score + " correct " + "and " + incorrect + " incorrect.")
        return;
    }
    
    var number = 30;
    var intervalId;
    
    function run() {
          clearInterval(intervalId);
          intervalId = setInterval(decrement, 1000);
        }
    
    function decrement() {
          number--;
          $("#timer").html("<h2>You have " + number + " seconds left</h2>");
          if (number === 0) {
            stop();
            alert("Time Up!");
            endGame()
          } else if (currentQuestion == totQuestions) {
              stop()
              endGame();
    
          }
        }
    
        function stop() {
          clearInterval(intervalId);
        }
    