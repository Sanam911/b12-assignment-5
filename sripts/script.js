// shared functions

// heart count increase function
function increaseHeartCount (id){
    const heartCountEl = document.getElementById(id)
    let heartCount = parseInt(heartCountEl.innerText)

    heartCount++;
    
    heartCountEl.innerText = heartCount;
}

// setting heart count increase function in heart icon btn
// for emergency section
document.getElementById("heart-emergency").addEventListener("click", function(){
    increaseHeartCount("heart-count")
})

// for police sec
document.getElementById("heart-police").addEventListener("click", function(){
    increaseHeartCount("heart-count")
})

// for fire service sec 
document.getElementById("heart-fire").addEventListener("click", function(){
    increaseHeartCount("heart-count")
})

//for Ambulance Service sec
document.getElementById("heart-ambulance").addEventListener("click", function(){
    increaseHeartCount("heart-count")
})

//for Women & Child Helpline sec
document.getElementById("heart-help").addEventListener("click", function(){
    increaseHeartCount("heart-count")
})

// Anti-Corruption Helpline
document.getElementById("heart-corruption").addEventListener("click", function(){
    increaseHeartCount("heart-count")
})