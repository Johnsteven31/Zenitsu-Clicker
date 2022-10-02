let gameState = {
    totalNumOfStrikes: 0,
    numOfPassiveStrikesGenerated: 0,
    intervalLoopID: undefined
}

let numOfPassiveStrikesGeneratedText = document.getElementById("Passive-Lightning-Strikes-Generated-total")
let lightningStrikesTotalEle= document.getElementById("lightning-strikes-total");

let lightningStrikesElement = document.getElementById("Zenitsu-Sleeping"); 

function lightningStrikesIncrementer (){
    gameState.totalNumOfStrikes = gameState.totalNumOfStrikes + 1;
    lightningStrikesTotalEle.textContent = gameState.totalNumOfStrikes;
};

lightningStrikesElement  .addEventListener("click", lightningStrikesIncrementer)

let ZenitsuBttnEle = document.getElementById("Zenitsu-Bttn"); 

function ZenitsuProducerPurchaser (){
    if (gameState.totalNumOfStrikes >= 50) {
        
        gameState.totalNumOfStrikes -= 50; 

        lightningStrikesTotalEle.textContent = gameState.totalNumOfStrikes;

        gameState.numOfPassiveStrikesGenerated += 5;

        numOfPassiveStrikesGeneratedText.textContent = gameState.numOfPassiveStrikesGenerated;
    }
};

ZenitsuBttnEle.addEventListener("click", ZenitsuProducerPurchaser)


let JigoroBttnEle = document.getElementById("Jigoro-Bttn"); 

function JigoroProducerPurchaser (){
    if (gameState.totalNumOfStrikes >= 100) {
        
        gameState.totalNumOfStrikes -= 100; 

        lightningStrikesTotalEle.textContent = gameState.totalNumOfStrikes;

        gameState.numOfPassiveStrikesGenerated += 10;

        numOfPassiveStrikesGeneratedText.textContent = gameState.numOfPassiveStrikesGenerated;
    }
};

JigoroBttnEle.addEventListener("click", JigoroProducerPurchaser)


let KaigakuBttnEle = document.getElementById("Kaigaku-Bttn"); 

function KaigakuProducerPurchaser (){
    if (gameState.totalNumOfStrikes >= 200) {
        
        gameState.totalNumOfStrikes -= 200; 

        lightningStrikesTotalEle.textContent = gameState.totalNumOfStrikes;

        gameState.numOfPassiveStrikesGenerated += 20;

        numOfPassiveStrikesGeneratedText.textContent = gameState.numOfPassiveStrikesGenerated;
    }
};

KaigakuBttnEle.addEventListener("click", KaigakuProducerPurchaser)



let startBttnEle = document.getElementById("Start-bttn");

function startIncrementingTheStrikes () {
    gameState.totalNumOfStrikes += gameState.numOfPassiveStrikesGenerated

    lightningStrikesTotalEle.textContent = gameState.totalNumOfStrikes;
}

function setupIncrementationInterval (){
    gameState.intervalLoopID = setInterval (startIncrementingTheStrikes, 1000)
    console.log(gameState.intervalLoopID);
}

startBttnEle.addEventListener("click", setupIncrementationInterval);



let pauseBttnEle = document.getElementById("Pause-bttn");

function pauseIntervalLoop (){
    clearInterval(gameState.intervalLoopID);
};

pauseBttnEle.addEventListener("click", pauseIntervalLoop)