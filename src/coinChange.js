// coinChange([1,2], 3)

var coinChange = function(coins, amount) {
    var memo = [];
    //Create array of length amount+1
    for(var i = 0; i <= amount; i++) {
      memo[i] = Number.POSITIVE_INFINITY;
    }
  
    memo[0] = 0;
    //coins length = 2
    for(var i = 0; i < coins.length; i++) {
      const coin = coins[i];
      // 1 to 4
      // coin = 1, 2
      for(var j = coin; j < memo.length; j++) {
        memo[j] = min2(memo[j], memo[j - coin] + 1);
      }
    }
    // When i = 0 and j = 1 [0, 1, Inf, Inf]
    // When i = 0 and j = 2 [0, 1, 2, Inf]
    // When i = 0 and j = 3 [0, 1, 2, 3]
    // When i = 1 and j = 2 [0, 1, 1, 3]
    // When i = 1 and j = 3 [0, 1, 1, 2]
    // 3, 2
    return (memo[amount] == Number.POSITIVE_INFINITY) ? -1 : memo[amount];
  };
  
  var min2 = function(a, b) {
    return (a < b) ? a : b;
};