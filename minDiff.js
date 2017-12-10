const minDiff = (nums) => {
  let sum = nums.reduce((pv, cv) => pv + cv, 0);
  console.log('total : ' + sum);

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

const minDiffReal = (nums) => {
  let sum = nums.reduce((pv, cv) => pv + cv, 0);

  let half = sum / 2;
  let dp = [], next = 0;
  for (let i = 0; i < nums.length; i++) {
    dp[next++] = nums[i];
    for (let j = 0; j < i; j++) {
      dp[next] = dp[next - i - 1] + nums[i];
      next++;
    }
  }
  console.log(dp);

  next--;
  for (let i = 0; i < nums.length; i++) {
    if (dp[next - i] <= half) {
      return 2 * Math.min(
        Math.abs(dp[next - i] - half), Math.abs(dp[next - i + 1] - half)
      );
    }
  }
  return null;
}

const progress = (percent) => {
  const lis = document.querySelectorAll('ul.membership li');
  let first = true;
  for (let i = 0; i < lis.length; i++) {
    let li = lis[i];
    if (first && (i + 1) / lis.length > percent) {
      console.log(li.innerText);
      first = false;
    }
    if (li.classList.contains('here')) {
      console.log(((i + 1) / lis.length * 100).toFixed(2));
    }
  }
}