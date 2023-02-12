setInterval(Timer,1000);
var Correct = [];
var Incorrect = [];


const countDown = document.querySelector(".time-score");
var timer = countDown.querySelector(".timer-sec");
var timeUp = countDown.querySelector(".stop");
var timeUpnum = countDown.querySelector(".timer");
const options_list = document.querySelector(".options-list");



 function User(){
    const userName = document.querySelector(".user-info");
    const Name = userName.querySelector("#user");
    var user = Name.value;
    window.sessionStorage.setItem("Name", user);
 }



let time = 300
function Timer(){
    let t = time;
    t = time > 0 ? time-- : '00';
    timer.innerHTML = t;
    if(time > 0){
        t = time--;
        timer.innerHTML = t;
    }
    else{
        t = '00'
        timeUpnum.classList.add("zero");
        timeUp.classList.add("Active");
        timeUp.innerHTML = 'TIME"S UP'
        next_btn.innerHTML = "See Your Results";
        
                    next_btn.onclick = ()=>{
                        window.sessionStorage.setItem("TimeTaken", t);   
                location.replace('http://127.0.0.1:5500/resultPage.html');
            }
    }
    window.sessionStorage.setItem("TimeTaken", t); 
}



url = window.location.href;
        url = url.split('/')
    let category = url[3];
    window.sessionStorage.setItem("URL", url); 
    

    var x = 'pipes-and-cisterns.html';
    var y = 'probability.html';
    var z = 'profit-and-loss.html';

if(category == x){
    const pipesandCisternquiz = document.querySelector(".pipesandCistern-question-box");
    var next_btn = pipesandCisternquiz.querySelector(".next-btn");

    }else if(category == y){
        const probabilityquiz = document.querySelector(".probability-question-box");
        var next_btn = probabilityquiz.querySelector(".next-btn");

    }else if(category == z){
        const proLossquiz = document.querySelector(".profitLoss-question-box");
        var next_btn = proLossquiz.querySelector(".next-btn");

    }else{
        const problemonAgesquiz = document.querySelector(".problemonAges-question-box");
        var next_btn = problemonAgesquiz.querySelector(".next-btn");
    }

    
    let que_count = 0;
    
    next_btn.onclick = ()=>{
        if(que_count < probability.length-1){
            que_count++;
            showQuestions(que_count);
        }else{
            next_btn.innerHTML = "See Your Results";
            next_btn.onclick = ()=>{ 
                location.replace('http://127.0.0.1:5500/resultPage.html');
            }
        }
        
    }



    function showQuestions(index){
        url = window.location.href;
        url = url.split('/')
        //url = url.split('.');
    let category = url[3];
            const que_text = document.querySelector(".question");
            const queNumber = document.querySelector(".que_number");
            const queSpan = queNumber.querySelector(".top");

            if(category == x){
            category = pipesAndCisterns;
            }else if(category == y){
                category = probability;
            }else if(category == z){
                category = profitAndLoss;
            }else{
                category = problemsOnAges;
            }
            var que_tag = '<span>'+ category[index].question +'</span>';
            var option_tag = '<div class="option"><span>'+category[index].options[0]+'</span></div>'+'<div class="option"><span>'+category[index].options[1]+'</span></div>'+'<div class="option"><span>'+category[index].options[2]+'</span></div>'+'<div class="option"><span>'+category[index].options[3]+'</span></div>';
            var qNumber = '<span class="top">'+category[index].number +'</span>';
            que_text.innerHTML = que_tag;
            options_list.innerHTML = option_tag;
            queSpan.innerHTML = qNumber;
            const option = options_list.querySelectorAll(".option");
            for (let i = 0; i < option.length; i++) {
                option[i].setAttribute("onclick", "optionSelected(this)");
                
            }
        }


        function optionSelected(answer){
            let userAns = answer.textContent;
            url = window.location.href;
            url = url.split('/')
            let category = url[3];
                if(category == x){
                category = pipesAndCisterns;
                }else if(category == y){
                    category = probability;
                }else if(category == z){
                    category = profitAndLoss;
                }else{
                    category = problemsOnAges;
                }
            let correctAnswer = category[que_count].answer    
            let allOptions = options_list.children.length;
            if(userAns == correctAnswer){
                answer.classList.add("correct");
                window.sessionStorage.setItem("Correct[]", Correct.push(correctAnswer));
                const score = document.querySelector(".score");
                const scoreNumber = score.querySelector(".score_correct");
                console.log(scoreNumber);
                
                var scoreNum = window.sessionStorage.getItem("Correct[]");
                var sNum = '<span class="score_correct" style="font-weight:bolder">'+scoreNum+'</span>'
                scoreNumber.innerHTML = sNum;
            }
            else{
                answer.classList.add("wrong");
                window.sessionStorage.setItem("Wrong[]", Incorrect.push(correctAnswer));
                //if wrong show right answer
                for (let i = 0; i < allOptions; i++) {
                    if(options_list.children[i].textContent == correctAnswer){
                        options_list.children[i].setAttribute("class", "option correct");
                    }
                    
                }
            }
            for (let i = 0; i < allOptions; i++) {
                options_list.children[i].classList.add("disabled"); 
            }
        }
