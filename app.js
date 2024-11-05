//while1
{
    let A = 25;
    let B = 4;
    let count = 0;
    
    while (A >= B) {
        A -= B;
        count++;
    }
    
    console.log("B ni soni:", count);
    console.log("Qolgan uzunlik:", A);
    
}
//while2
{
    let A = 25;
    let B = 4;
    let count = 0;
    
    while (A >= B) {
        A -= B;
        count++;
    }
    
    console.log("Joylashtirish mumkin bo'lgan soni:", count);
    
}
//while3
{
    let N = 23;
    let K = 5;
    let butun = 0;
    
    while (N >= K) {
        N -= K;
        butun++;
    }
    
    console.log("Butun qismi:", butun);
    console.log("Qoldiq qismi:", N);
    
}
//while4
{
    let n = 27;
    let Three = true;
    
    while (n > 1) {
        if (n % 3 !== 0) {
            Three = false;
            break;
        }
        n /= 3;
    }
    
    console.log(Three ? "3 ning darajasi" : "3 ning darajasi emas");
    
}
//while5
{
    let n = 16;
    let k = 0;
    
    while (Math.pow(2, k) < n) {
        k++;
    }
    
    console.log(Math.pow(2, k) === n ? k : "n 2 ning darajasi emas");
    
}
//while6
{
    let n = 5;
    let result = 1;
    let i = n;
    
    while (i > 1) {
        result *= i;
        i -= 2;
    }
    
    console.log(result);
    
}
//while7
{
    let n = 17;
    let k = 1;
    
    while (k * k <= n) {
        k++;
    }
    
    console.log(k);
    
}
//while8
{
    let n = 17;
    let k = 1;
    
    while (k * k <= n) {
        k++;
    }
    
    console.log(k - 1);
    
}
//while9
{
    let n = 100;
    let k = 0;
    let count = 1;
    
    while (count < n) {
        count *= 3;
        k++;
    }
    
    console.log(k - 1);
    
}
//while10
{
    let n = 100;
    let k = 0;
    let count = 1;
    
    while (count <= n) {
        count *= 3;
        k++;
    }
    
    console.log(k - 1);
    
}