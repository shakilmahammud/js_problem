 



const macth=(n)=>{
    let mth=0;
    while (n>1) {
        if(n%2===0){
            mth += n/2; //  If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
             round.
            n=n/2; // next round
        }else if(n%2 !==0){
            mth += (n-1)/2; //If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next
            n=((n-1)/2)+1; // next round
        }
    }
    return mth;
}
// n=1 => n-1/2 = 1-1/2 = 0