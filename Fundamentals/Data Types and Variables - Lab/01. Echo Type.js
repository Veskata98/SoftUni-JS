function solve() {
    if (typeof params === 'string') {
        console.log('string');
        console.log(params);
    } else if (typeof params === 'number') {
        console.log('number');
        console.log(params);
    } else {
        console.log(typeof params);
        console.log('Parameter is not suitable for printing');
    }
}

solve();
