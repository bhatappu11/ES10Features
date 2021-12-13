var obj = {
    1:'apple',
    2:'ball',
    3:'cat',
    4:'dog'
}

var entries = Object.entries(obj);
console.log(entries);

var fromEntries = Object.fromEntries(entries);
console.log(fromEntries)