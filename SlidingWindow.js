function maxSumSubarray(nums, k) {
    let maxSum = 0;
    let windowSum = 0;
    
    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    console.log(windowSum);
    maxSum = windowSum;
    
    // Slide the window from left to right
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSu m = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}



const num = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const k = 4;

console.log("maxSubArray :", maxSumSubarray(num, k));
