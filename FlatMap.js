var arr = [1,2,3,4,5]

console.log(arr.map(x=> [x,x*3]));

console.log(arr.flatMap(z=>[z,z*3]));
