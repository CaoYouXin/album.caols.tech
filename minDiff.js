const minDiff = (nums) => {
    let sum = nums.reduce((pv, cv) => pv + cv, 0);
    console.log('total : ' +  sum);

    let half = Math.floor(sum / 2);
    let dp = [true];

    for (let i = 0; i < nums.length; i++) {
        for (let j = half; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }

    for (let k = half; k >= 0; k--) {
        if (dp[k]) {
            return (half - k) * 2 + (sum % 2 === 0 ? 0 : 1);
        }
    }
    return -1;
}