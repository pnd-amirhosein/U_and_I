const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const scales = ["", "thousand", "million", "billion"];

export function convertHundreds(n: number): string {
    let words = "";

    if (n >= 100) {
        const h = Math.floor(n / 100);
        words += units[h] + " hundred";
        n %= 100;
        if (n > 0) words += " ";
    }

    if (n >= 10 && n <= 19) {
        words += teens[n - 10];
    } else if (n >= 20) {
        const t = Math.floor(n / 10);
        const u = n % 10;
        words += tens[t];
        if (u > 0) words += "-" + units[u];
    } else if (n > 0) {
        words += units[n];
    }

    return words;
}

export function numberToWords(n: number): string {
    if (n === 0) return "zero";
    if (n < 0) return "minus " + numberToWords(-n);
    if (!Number.isSafeInteger(n)) return "number too large";

    const triplets: number[] = [];
    let num = n;

    while (num > 0) {
        triplets.push(num % 1000);
        num = Math.floor(num / 1000);
    }

    const wordsArr: string[] = [];

    for (let i = triplets.length - 1; i >= 0; i--) {
        const triplet = triplets[i];
        if (triplet === 0) continue;

        let tripletWords = convertHundreds(triplet);
        if (scales[i]) tripletWords += " " + scales[i];

        wordsArr.push(tripletWords);
    }

    return wordsArr.join(" ");
}