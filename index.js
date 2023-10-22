const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((total, batches) => batches + total)
console.log('%cindex.js line:6 totalBatteries', 'color: #007acc;', totalBatteries);
