let t0 = 1000;
let t1 = 3000;
let product = t0*t1;

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let tokenName, buyingAmount;

function getToken() {
    return new Promise((resolve, reject) => {
        rl.question('Which token do you want to buy? ', (input) => {
            if (input != "token0" && input != "token1") {
                console.log('Please choose token0 or token1');
                resolve(getToken());
            } else {
                tokenName = input;
                resolve(tokenName);
            }
        });
    });
}

function getAmount() {
    return new Promise((resolve, reject) => {
        rl.question('How many token do you want to buy? ', (input) => {
            if (isNaN(input)) {
                console.log('Please give the number of tokens you want to buy');
                resolve(getAmount());
            } else if (input <= 0){
                console.log("You can not buy tokens of a negative amount or zero");
                resolve(getAmount());
            } else {
                buyingAmount = Number(input);
                resolve(buyingAmount);
            }
        });
    });
}

async function calculateSlippage() {
    await getToken();
    await getAmount();
    
    if (tokenName == "token0") {
        if (buyingAmount < t0) {
            let initialPrice = t1/t0;
            let paidAmount = (product/(t0 - buyingAmount)) - t1;
            let paidPrice = paidAmount/buyingAmount;
            let slippage = ((paidPrice-initialPrice)/initialPrice)*100;
            console.log("The slippage amount of your trade is " + slippage.toFixed(4) +"%");
        } else if (buyingAmount >= t0){
            console.log("You can not buy tokens more than in the pool");
            calculateSlippage();
        }
    } else {
        if (buyingAmount < t1) {
            let initialPrice = t0/t1;
            let paidAmount = (product/(t1 - buyingAmount)) - t0;
            let paidPrice = paidAmount/buyingAmount;
            let slippage = ((paidPrice-initialPrice)/initialPrice)*100;
            console.log("The slippage amount of your trade is " + slippage.toFixed(4) +"%");
        } else if (buyingAmount >= t1){
            console.log("You can not buy tokens more than in the pool");
            calculateSlippage();
        }
    }
    rl.close();
}

calculateSlippage();
