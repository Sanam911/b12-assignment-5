let callHistoryData = []


// shared functions

// heart count increase function
function increaseCount(id) {
    const CountEl = document.getElementById(id)
    let Count = parseInt(CountEl.innerText)

    Count++;

    CountEl.innerText = Count;
}



// setting heart count increase function in heart icon btn
// for emergency section
document.getElementById("heart-emergency").addEventListener("click", function () {
    increaseCount("heart-count")
})

// for police sec
document.getElementById("heart-police").addEventListener("click", function () {
    increaseCount("heart-count")
})

// for fire service sec 
document.getElementById("heart-fire").addEventListener("click", function () {
    increaseCount("heart-count")
})

//for Ambulance Service sec
document.getElementById("heart-ambulance").addEventListener("click", function () {
    increaseCount("heart-count")
})

//for Women & Child Helpline sec
document.getElementById("heart-help").addEventListener("click", function () {
    increaseCount("heart-count")
})

// Anti-Corruption Helpline
document.getElementById("heart-corruption").addEventListener("click", function () {
    increaseCount("heart-count")
})


// ******* call button functionality sec  *******
// for emergency sec
document.getElementById("btn-call-emergency").addEventListener("click", function () {
    const coinCountEl = document.getElementById("coin-count")
    let coinCount = parseInt(coinCountEl.innerText)

    if (coinCount < 20) {
        alert("🚫 Not enough coins! 💰 You need at least 20 coins to make a call 📞✨")
        return
    }

    alert("Calling National Emergency Number 999...")


    let newCoinCount = coinCount - 20

    document.getElementById("coin-count").innerText = newCoinCount;

    const data = {
        service: "National Emergency Number",
        phone: "999",
        time: new Date().toLocaleTimeString(),
    }

    callHistoryData.push(data)
    // console.log(callHistoryData)


    let callHistorySec = document.getElementById("call-h-card-sec")
    callHistorySec.innerText = ""

    for (const data of callHistoryData) {
        const div = document.createElement("div")

        div.innerHTML = `
            <div id="call-h-card"
                class="flex justify-between items-center mt-[30px] bg-[#FAFAFA] p-5 rounded-xl">
                    <div>
                        <h3 class="font-semibold">${data.service}</h3>
                        <p class="text-[#5C5C5C]">${data.phone}</p>
                    </div>
                    <div>
                        <p>${data.time}</p>
                    </div>
            </div>
        `
        callHistorySec.appendChild(div)
    }

})

// for police sec
document.getElementById("btn-call-police").addEventListener("click", function () {
    const coinCountEl = document.getElementById("coin-count")
    let coinCount = parseInt(coinCountEl.innerText)

    if (coinCount < 20) {
        alert("🚫 Not enough coins! 💰 You need at least 20 coins to make a call 📞✨")
        return
    }

    alert("Calling Police Helpline Number 999...")


    let newCoinCount = coinCount - 20

    document.getElementById("coin-count").innerText = newCoinCount;

    const data = {
        service: "Police Helpline Number",
        phone: "999",
        time: new Date().toLocaleTimeString(),
    }

    callHistoryData.push(data)
    // console.log(callHistoryData)


    let callHistorySec = document.getElementById("call-h-card-sec")
    callHistorySec.innerText = ""

    for (const data of callHistoryData) {
        const div = document.createElement("div")

        div.innerHTML = `
            <div id="call-h-card"
                class="flex justify-between items-center mt-[30px] bg-[#FAFAFA] p-5 rounded-xl">
                    <div>
                        <h3 class="font-semibold">${data.service}</h3>
                        <p class="text-[#5C5C5C]">${data.phone}</p>
                    </div>
                    <div>
                        <p>${data.time}</p>
                    </div>
            </div>
        `
        callHistorySec.appendChild(div)
    }

})

// for fire service sec
document.getElementById("btn-call-fire").addEventListener("click", function () {
    const coinCountEl = document.getElementById("coin-count")
    let coinCount = parseInt(coinCountEl.innerText)

    if (coinCount < 20) {
        alert("🚫 Not enough coins! 💰 You need at least 20 coins to make a call 📞✨")
        return
    }

    alert("Calling Fire Service Number 999...")


    let newCoinCount = coinCount - 20

    document.getElementById("coin-count").innerText = newCoinCount;

    const data = {
        service: "Fire Service Number",
        phone: "999",
        time: new Date().toLocaleTimeString(),
    }

    callHistoryData.push(data)
    // console.log(callHistoryData)


    let callHistorySec = document.getElementById("call-h-card-sec")
    callHistorySec.innerText = ""

    for (const data of callHistoryData) {
        const div = document.createElement("div")

        div.innerHTML = `
            <div id="call-h-card"
                class="flex justify-between items-center mt-[30px] bg-[#FAFAFA] p-5 rounded-xl">
                    <div>
                        <h3 class="font-semibold">${data.service}</h3>
                        <p class="text-[#5C5C5C]">${data.phone}</p>
                    </div>
                    <div>
                        <p>${data.time}</p>
                    </div>
            </div>
        `
        callHistorySec.appendChild(div)
    }

})

// for ambulance service sec
document.getElementById("btn-call-ambulance").addEventListener("click", function () {
    const coinCountEl = document.getElementById("coin-count")
    let coinCount = parseInt(coinCountEl.innerText)

    if (coinCount < 20) {
        alert("🚫 Not enough coins! 💰 You need at least 20 coins to make a call 📞✨")
        return
    }

    alert("Calling Ambulance Service Number 1994-999999...")


    let newCoinCount = coinCount - 20

    document.getElementById("coin-count").innerText = newCoinCount;

    const data = {
        service: "Ambulance Service Number",
        phone: "1994-999999",
        time: new Date().toLocaleTimeString(),
    }

    callHistoryData.push(data)
    // console.log(callHistoryData)


    let callHistorySec = document.getElementById("call-h-card-sec")
    callHistorySec.innerText = ""

    for (const data of callHistoryData) {
        const div = document.createElement("div")

        div.innerHTML = `
            <div id="call-h-card"
                class="flex justify-between items-center mt-[30px] bg-[#FAFAFA] p-5 rounded-xl">
                    <div>
                        <h3 class="font-semibold">${data.service}</h3>
                        <p class="text-[#5C5C5C]">${data.phone}</p>
                    </div>
                    <div>
                        <p>${data.time}</p>
                    </div>
            </div>
        `
        callHistorySec.appendChild(div)
    }

})

// for women & child helpline
document.getElementById("btn-call-women").addEventListener("click", function () {
    const coinCountEl = document.getElementById("coin-count")
    let coinCount = parseInt(coinCountEl.innerText)

    if (coinCount < 20) {
        alert("🚫 Not enough coins! 💰 You need at least 20 coins to make a call 📞✨")
        return
    }

    alert("Calling Women & Child Helpline 109...")


    let newCoinCount = coinCount - 20

    document.getElementById("coin-count").innerText = newCoinCount;

    const data = {
        service: "Women & Child Helpline",
        phone: "109",
        time: new Date().toLocaleTimeString(),
    }

    callHistoryData.push(data)
    // console.log(callHistoryData)


    let callHistorySec = document.getElementById("call-h-card-sec")
    callHistorySec.innerText = ""

    for (const data of callHistoryData) {
        const div = document.createElement("div")

        div.innerHTML = `
            <div id="call-h-card"
                class="flex justify-between items-center mt-[30px] bg-[#FAFAFA] p-5 rounded-xl">
                    <div>
                        <h3 class="font-semibold">${data.service}</h3>
                        <p class="text-[#5C5C5C]">${data.phone}</p>
                    </div>
                    <div>
                        <p>${data.time}</p>
                    </div>
            </div>
        `
        callHistorySec.appendChild(div)
    }

})

// for anti-corruption helpline
document.getElementById("btn-call-corruption").addEventListener("click", function () {
    const coinCountEl = document.getElementById("coin-count")
    let coinCount = parseInt(coinCountEl.innerText)

    if (coinCount < 20) {
        alert("🚫 Not enough coins! 💰 You need at least 20 coins to make a call 📞✨")
        return
    }

    alert("Calling Anti-Corruption Helpline 106...")


    let newCoinCount = coinCount - 20

    document.getElementById("coin-count").innerText = newCoinCount;

    const data = {
        service: "Anti-Corruption Helpline",
        phone: "106",
        time: new Date().toLocaleTimeString(),
    }

    callHistoryData.push(data)
    // console.log(callHistoryData)


    let callHistorySec = document.getElementById("call-h-card-sec")
    callHistorySec.innerText = ""

    for (const data of callHistoryData) {
        const div = document.createElement("div")

        div.innerHTML = `
            <div id="call-h-card"
                class="flex justify-between items-center mt-[30px] bg-[#FAFAFA] p-5 rounded-xl">
                    <div>
                        <h3 class="font-semibold">${data.service}</h3>
                        <p class="text-[#5C5C5C]">${data.phone}</p>
                    </div>
                    <div>
                        <p>${data.time}</p>
                    </div>
            </div>
        `
        callHistorySec.appendChild(div)
    }

})


// ***** Clear history btn functionality sec *******
document.getElementById("btn-clear-history").addEventListener("click", function(){
    let callHistorySec = document.getElementById("call-h-card-sec")
    callHistorySec.innerText = ""
    callHistoryData = []
})


// ********---- copy button functionality sec ------********
// for emergency sec
document.getElementById("btn-copy-emergency").addEventListener("click", function(){
    increaseCount("copy-count")
})

// for police sec
document.getElementById("btn-copy-police").addEventListener("click", function(){
    increaseCount("copy-count")
})

// for fire sec
document.getElementById("btn-copy-fire").addEventListener("click", function(){
    increaseCount("copy-count")
})

// for ambulance sec
document.getElementById("btn-copy-ambulance").addEventListener("click", function(){
    increaseCount("copy-count")
})

// for women & child sec
document.getElementById("btn-copy-women").addEventListener("click", function(){
    increaseCount("copy-count")
})

// for anti-corruption sec
document.getElementById("btn-copy-corruption").addEventListener("click", function(){
    increaseCount("copy-count")
})



