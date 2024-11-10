const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n <= 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
};

const testcases = [1, 2, 3, 4, 5, 10, 20, 25, 30, 40, 45, 50];
for (const n of testcases) {
    console.log(`Fibonacci of ${n} : ${fibonacci(n)}`);
}
