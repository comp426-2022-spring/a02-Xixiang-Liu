import { coinFlips, countFlips } from "./modules/coin.mjs";

try {
    let number = 1; 
    const arg = process.argv.slice(2)[0].slice(9);
    number = arg;
    console.log(countFlips(coinFlips(number)));
} 
catch (error) {
    console.log(countFlips(coinFlips(1)));
}