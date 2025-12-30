let quiz = [];
let q = 0;
 let count = 0;
function ChargerJson() {
  fetch("quiz.json").then(response => {
      if (!response.ok) throw new Error("Fichier non trouvé");
      return response.json();
      
    })
    .then(data => {
      quiz = data;
        Foreachq();
        QuizAndOption(q)
    })
    .catch(error => {
      quiz = [];
      console.log("Aucun fichier trouvé, nouveau fichier sera créé");
    });
}

function QuizAndOption(q) {
    
    const quizdiv = document.getElementById("quizdiv");
    quizdiv.innerHTML = "";

    quizdiv.innerHTML += `<h3>${quiz.questions[q].question}</h3>`;

    let options = quiz.questions[q].options;
    for(i = 0 ; i<options.length; i++){
        e = i;
        e++;
        quizdiv.innerHTML += `<button class="btn" id="${i}" onclick="VerifyA(${i},${q})" > <label class="quiznbr">${e}</label> ${quiz.questions[q].options[i]}</button><br>`;
    }
    
    quizdiv.innerHTML +=`<button onclick="NextQ()" id="sub" disabled>Submit</button>`


 
}
function NextQ(){
    q++;
    QuizAndOption(q)
}
function VerifyA(i,q){
    
    let btn = document.getElementById(i);
    let sub = document.getElementById("sub");
    const btn2 = document.querySelectorAll(".btn");
    const correctAnswer = quiz.questions[q].correctAnswer;
    const Option = quiz.questions[q].options[i]
        btn2.forEach(button => {
        button.disabled = true;
        button.style.cursor = "default";    
        btn.disabled = false;
    });

    if( correctAnswer == Option  ){
         btn.style.backgroundColor = "green";
        // console.log(1);
       
        count = count + 1;
        console.log(count);
        sub.disabled = false;
                let id =  "quiw"+quiz.questions[q].id;
                id = document.getElementById(id);
                id.style.backgroundColor ="green";
                id.style.color ="white";
        finishgame(q,count);
    }else{
        btn.style.backgroundColor = "red";
         btn2.forEach(btt => {
            // if(button.value)
            if(btt.textContent.trim().includes(correctAnswer) ){
                btt.style.backgroundColor = "green";
                btt.disabled = false;
                let id =  "quiw"+quiz.questions[q].id;
                id = document.getElementById(id);
                id.style.backgroundColor ="red";
                id.style.color ="white";


                // console.log(btt.textContent);
                
                
            }
    });
        // console.log("0");
        sub.disabled = false;
        finishgame(q,count);     
    }
    // btn.style.backgroundColor = "green";
   


    // console.log(i);
}
function Foreachq(){
    displayquiw = document.getElementById("displayquiw");
    quiz.questions.forEach(q => {
        displayquiw.innerHTML += `<button class="QuizQuest" id="quiw${q.id}">${q.question}</button>`
        // console.log(q.question)
    });
}
function finishgame(q,count){
    q = q + 1;
    let qui = quiz.questions.length;
    let counter = document.getElementById("counter");
    counter.innerHTML= "";
    counter.innerHTML = `<h3 align="center" id="counter">${q}/${qui}</h3>`

    console.log("qui est ="+qui+"q est =" + q)
    if(q === qui){
        let sub = document.getElementById("sub");
        sub.disabled = true;
        let correctAns = document.getElementById("correctAns");
        correctAns.innerHTML = `<h3 id="correctAns"> correct answer ${count} / ${qui}</h3>`
    }
}

ChargerJson();

