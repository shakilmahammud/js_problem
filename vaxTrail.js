
function vaxTrail(obj) {
    const isEven = num => num % 2 === 0;
     return obj.sort(function (a, b) {
        if(isEven(a.age) && !isEven(b.age)){
            return -1;
         };
         if(!isEven(a.age) && isEven(b.age)){
            return 1;
         };
         return a - b;
        
      });
}

console.log(vaxTrail([
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'Biplap', age: 36, temperature: 98 },
    ]))
