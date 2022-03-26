const firstTask = (n, a = []) => {
    let k = 0;

    if (a.length === 0) {
        for (let i = 0; i < n; i++) {
            a.push(Math.floor(Math.random() * 10))
        }
    }
    for (let i = 0; i < a.length; i++) {
        if (Math.sqrt(a[i] % 2 === 0)) {
            k++;
        }
    }
    return k;
}

//console.log(firstTask())

module.exports = firstTask;




