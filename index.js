const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let reducer = (acc, currval) => acc + currval
let totalBatteries = batteryBatches.reduce(reducer)