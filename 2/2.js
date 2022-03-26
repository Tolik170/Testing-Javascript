const secondTask = (n) => {
    let array = [];
    for (let i = 1; i <= 9; ++i)
        for (let j = 0; j <= 9; ++j)
            for (let k = 0; k <= 9; ++k) {
                if (i + j + k === n)
                    array.push(i * 100 + j * 10 + k);
            }
    return array;
}
//console.log(secondTask(0))

module.exports = secondTask;