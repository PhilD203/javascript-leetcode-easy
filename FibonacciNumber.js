/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {

    if (N == 0) {
        return 0
    }

    var pastFibs = [0, 1]

    for (var i = 2; i <= N; i++) {
        var sum = pastFibs[i - 1] + pastFibs[i - 2]
        pastFibs.push(sum);
    }
    return pastFibs.pop();
};

// store pastFibs [0,1]

// for loop N starting at index 4: i
    // sum values of pastFibs[i - 1] and pastFibs[i - 2] = 2 + 1 = 3
    // set sum in pastFibs[4] = 3

 // F(0) = 0
 //    F(1) = 1
 //    F(2) = 1
 //    F(3) = F(2) + F(1) = 1 + 1 = 2
 //    F(4) = F(3) + F(2) = 2 + 1 = 3
 //    F(5) = 