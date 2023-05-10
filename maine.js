"use state"

function fib(firstLowNum, secondMaxNum) {
    if (typeof firstLowNum !== 'number' || typeof secondMaxNum !== 'number' || firstLowNum <= 0 || secondMaxNum <= 0) {
        throw Error('Аргументы должны быть положительными числами');
    }

    let sum_even_valued = 0;

    function max(maxSum) {
        if (maxSum < 0) {
            throw Error(`Максимальное число не может быть отрицательным`);
        }

        while (secondMaxNum <= maxSum) {
            if (firstLowNum % 2 === 0) {
                sum_even_valued += firstLowNum;
            }

            const temp = firstLowNum + secondMaxNum;
            firstLowNum = secondMaxNum;
            secondMaxNum = temp;
        }

        return sum_even_valued;
    }

    return max;
}

const fibFunc = fib(3, 4)(7000000);
console.log(fibFunc);