



function climbStairs(n) {
    let fst = 1, snd= 2;
   if(n<3){
    return n;
   }
   for(let i=3; i<=n;i++){
    let currentStep = fst + snd;
    fst = snd;
    sdn = currentStep;
   }
   return snd;
};