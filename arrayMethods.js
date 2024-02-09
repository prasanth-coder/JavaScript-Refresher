const nums = [{"name" : "prasanth" ,"rollNo" : 100},{"name" : "prasanna" ,"rollNo" : 101},{"name" : "prakash" ,"rollNo" : 103}]

console.log(nums.map(o => o.name))
console.log(nums.filter(o => o.rollNo === 100))

console.log(nums.reduce((acc,total) => acc+total.rollNo,0))

console.log(nums.some(o => o.name === "prasanth"));

console.log(nums.every(o => o.name === "prasanth"));