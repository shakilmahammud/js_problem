



//Input: a = "11", b = "1"
Output: "100"

function binary_sum(a,b) {
    return BigInt(`0b${a}`) + BigInt(`0b${b}`).toString(2);
}