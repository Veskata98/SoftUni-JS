function solve(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let letter = String.fromCharCode(97 + i);
                let letter2 = String.fromCharCode(97 + j);
                let letter3 = String.fromCharCode(97 + k);
                let arr = [];
                arr.push(letter, letter2, letter3);
                console.log(arr.join(''));
            }
        }
    }
}