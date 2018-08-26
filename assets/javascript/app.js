var questions = [
    {
        question: "Which phrase does the Evil Queen in 'Snow White' say?",
        option1: "Mirror, mirror, on the wall - who is the fairest of them all?",
        option2: "Magic mirror, on the wall - who is the fairest one of all?",
        option3: "Mirror, mirror, on the wall - who is the fairest one of all?",
        option4: "Magic mirror, on the wall - who is the fairest of them all?",
        answer: 2
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
        question: "What year did Disneyland open?",
        option1: "1954",
        option2: "1959",
        option3: "1955",
        option4: "1960",
        answer: 3
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
    
    $("body").on("click", "#startButton", function(event){
        event.preventDefault();  
        startGame()
        run();
        $("#wrapper").show();
        $("#instructions").hide();
        $("#startButton").hide();
    });
    
    
    function loadQuestion(questionIndex) {
        var q = questions[questionIndex];
        $("#question").html((questionIndex + 1) + ". " + q.question);
        console.log(currentQuestion)
        $("#opt1").text(q.option1);
        $("#opt2").text(q.option2);
        $("#opt3").text(q.option3);
        $("#opt4").text(q.option4);
    
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
    
    