const memo = {};

const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n <= 2) return 1;
    if (n in memo) return memo[n];

    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
};

const testcases = [1, 2, 3, 4, 5, 10, 20, 25, 30, 40, 45, 50];
for (const n of testcases) {
    console.log(`Fibonacci of ${n} : ${fibonacci(n)}`);
}
