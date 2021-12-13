var arr = [1,2,3,[4,5,6,['a','b','c',['x',10,'z']]]]

console.log(arr.flat())
console.log(arr.flat().flat())
console.log(arr.flat().flat().flat())
console.log(arr.flat(Infinity))