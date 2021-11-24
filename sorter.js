function sammenlignFunksjon(a, b) {
    console.log(a + " - " + b + " = " + (a - b));
    return a - b;
}

let tall = [1, 4, 41, 82, 101, 14];
tall.sort(sammenlignFunksjon);
console.log(tall);