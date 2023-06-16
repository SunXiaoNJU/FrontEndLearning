/* 
动态规划 + 贪心算法 实现最大子序和
*/
function maxSubArray(nums) {
  const dp = [];
  dp[0] = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    maxSum = Math.max(maxSum, dp[i]);
  }
  return maxSum;
}
