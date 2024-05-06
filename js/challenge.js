const counter = document.getElementById("counter")

const minusButton = document.getElementById("minus")

const plusButton = document.getElementById("plus")

const heartButton = document.getElementById("heart")

const likes = document.querySelector(".likes")



let count = 0
let intervalID;
let ispaused = false;
let likeCounts= {};

const pauseButton = document.getElementById("pause")


window.onload = function() {
    intervalID = setInterval(function() {
        count ++ ;
        counter.textContent = count;
    }, 1000)
    
};



minusButton.addEventListener("click", function(){
    counter.textContent = --count
})

plusButton.addEventListener("click", function(){
    counter.textContent = ++count
})
function addLike(){
    if(!likeCounts[count]){
        likeCounts[count] = 1;
    }else{
        likeCounts[count]++;
    } renderList()
}
function renderList() {
    
    likes.innerHTML = "";
    for (const key in likeCounts){
        const li = document.createElement("li");
        li.innerText = `${key} has been liked ${likeCounts[key]} times`;
        likes.appendChild(li);

    }
}

function addlikebck() {
    likeCounts[count] = (likeCounts[count] || 0) + 1;
    const li = document.createElement("li");
    li.innerText = `${count} has been liked ${likeCounts[count]} times`;
    likes.appendChild(li);
}


heartButton.addEventListener("click", addLike)


let ul = document.createElement("ul")
let div = document.getElementById("list")
    div.append(ul)

 const submitButton = document.querySelector("form")
 
 submitButton.addEventListener("submit", (e) => {
    e.preventDefault()
    let submitText = document.getElementById("comment-input").value
    let comments = document.createElement("li")
    comments.textContent = submitText
    ul.append(comments)
   
 });
 
 
 buttons = document.getElementsByTagName("button");
 let buttonsArray = [];

for (let i=0 ;i<buttons.length;i++ ){
    if (buttons[i].id != "pause"){
        buttonsArray.push(buttons[i])
    }
}

 pauseButton.addEventListener("click", function(){
    if(ispaused){
        intervalID = setInterval(function() {
            count ++ ;
            counter.textContent = count;
        }, 1000)
        buttonsArray.forEach(button => enableButton(button));
        setPause()
        console.log('i am active')
        ispaused=false;
    }else{
        clearInterval(intervalID)
        buttonsArray.forEach(button => disableButton(button));
        replaceButton();
        console.log('i am paused')
        ispaused=true;
    }
 });

 function disableButton(button){
    button.setAttribute("disabled", true)
 };

 function enableButton(button){
    button.removeAttribute("disabled", true)
 };

 function replaceButton(){
    pauseButton.textContent = "resume"
 }

 function setPause(){
    pauseButton.textContent = "pause"
 }
 

 