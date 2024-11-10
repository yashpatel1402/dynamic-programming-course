const memo = {};

const noOfWaysToTravelGrid = (n, m) => {
    if (n <= 0 || m <= 0) return 0;
    if (n == 1 && m == 1) return 1;

    const key = `${Math.min(n, m)}:${Math.max(n, m)}`;
    if (key in memo) return memo[key];

    memo[key] = noOfWaysToTravelGrid(n - 1, m) + noOfWaysToTravelGrid(n, m - 1);
    return memo[key];
};

const testcases = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 10],
    [10, 5],
    [20, 20],
];

for (const [n, m] of testcases) {
    console.log(
        `No of ways to travel the grid for ${n} rows and ${m} columns : ${noOfWaysToTravelGrid(n, m)}`,
    );
}
