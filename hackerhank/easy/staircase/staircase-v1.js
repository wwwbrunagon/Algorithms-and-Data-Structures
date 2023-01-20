function staircase(n) {
    for (var i = 1; i <=n; i++){
        var row = new Array(n).fill(' ').fill('#', n - i).join('') 
        console.log(row)
    } 
}

staircase(4);