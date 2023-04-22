



// x1 = (x0 + S / x0) / 2

function sqr(x) {
    let num = x;
    while ( num*num>x){
        num = (num + x / num) / 2 | 0 ;
    }
    return num;
}  