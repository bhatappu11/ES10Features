var users = [
    {name: 'Bob', rate: 5},
    {name: 'Max', rate: 5},
    {name: 'Ava', rate: 5},
    {name: 'Cristiano', rate: 5},
    {name: 'Neymar', rate: 4},
    {name: 'Bale', rate: 4},
    {name: 'Messi', rate: 3},
    {name: 'Kleen', rate: 4},
    {name: 'Kobe', rate: 4},
]
console.log(users.sort((a,b)=>a.rate-b.rate))