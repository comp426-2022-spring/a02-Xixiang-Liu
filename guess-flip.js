import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
if (args.call == null || (args.call != "heads" && args.call != "tails")) {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
} else {
    console.log(flipACoin(args.call));
}