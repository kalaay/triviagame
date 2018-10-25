$(document).ready(function() {
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Trivia</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  // added line to test issue on GitHub Viewer
    
    
    }); 
    
    $("body").on("click", ".answer", function(event){
        selectedAnswer = $(this).text();
        
    }); 
    
    
    
    });        

    
    



    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    var startScreen;
    var gameHTML;
    var counter = 30;

    var questionArray =["Who is the greates Basketball player of all time?", 
                        "What in the world is CSS",
                        "Who is the greatest Michael?",
                        "What is the capital of Japan?"];

    var answerArray = [["Jordan", 
                        "Jackson", 
                        "Jermain", 
                        "Jeremy"], 
                        
                      ["Stylesheets","Chicken","Lemon","Sugar"], 
                      ["Tyson", "Taichung", "Taipei", "Hsinchu"], 
                      ["Kyoto","Hiroshima","Tokyo","Osaka"]];

    var correctAnswers = ["A. Jordan", 
                          "B. Stylesheets", 
                          "C. Tyson", 
                          "D. Tokyo"]

    