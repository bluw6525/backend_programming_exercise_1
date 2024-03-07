for (let i = 1; i <= 1000; i++) {
    let x = true;
    for (let p = 2; p <= i/2; p++) {
        if(i == 1){
            break;
        }
        if (i % p === 0) {
            x = false;
            break;
        }
    }
    if (x) {
        console.log(i);
    }
}