function fibonacci(a = 0, b = 1) {
    if (a > 144) {
        return;
    }
    console.log(a);
    setTimeout(() => {
        fibonacci(b, a + b);
    }, 1000);
}
fibonacci();