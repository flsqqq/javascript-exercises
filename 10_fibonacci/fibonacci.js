const fibonacci = function(num) {
    // convert to number
    num = Number(num);

    // do not accept negatives
    if (num < 0) return "OOPS";

    let fibSeq = [1, 1];
    let currMember = 0;

    if (num == 1 || num == 2) return 1;

    // start from 3rd member of series
    for (let i = 2; i < num; i++) {
        currMember = fibSeq[i-2] + fibSeq[i-1];
        fibSeq.push(currMember);
    }
    return currMember;

};

// Do not edit below this line
module.exports = fibonacci;
