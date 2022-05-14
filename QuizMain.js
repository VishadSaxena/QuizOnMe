var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hi, What is your name? ");

console.log("Hi", userName);

var ans = readlineSync.question("Do you know Vishad? ");

var score = 0;

function quiz (question, answer){
    
    var userAnswer = readlineSync.question(question);

    if(userAnswer === answer){
        console.log("Correct !! ");
        score++;
    }    
    else{
        console.log("Ohh.. Incorrect :( ");
    }
}

//var questions = [
        var questionOne={
           question : "Where does Vishad work? ",

            answer : "Wipro" 
        }

        var questionTwo={
            question : "Where does he work from? ",

            answer : "Bangalore"
        }

        var questionThree={
            question : "Where is Vishad native place? ",

            answer : "Lucknow"
        }

        var questionFour={
            question : "When did he complete is Graduation? ",

            answer : "2018"
        }
//]

var questions = [questionOne,questionTwo,questionThree,questionFour];


for(var i = 0 ; i < questions.length ; i++){
    quiz(questions[i].question,questions[i].answer)
}

console.log("------------------");
console.log("Your final Score is ", score);
