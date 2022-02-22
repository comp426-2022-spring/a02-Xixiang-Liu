import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
if (args.number == null)
    args.number = 1;
let record = coinFlips(args.number);
if (args.number <= 1) {
    let data = countFlips(record);
    if (data.heads == 1) {
        console.log("{heads: " + data.heads + "}");
    } else {
        console.log("{tails: " + data.tails + "}");
    }
} else {
    console.log(record);
    console.log(countFlips(record));
}