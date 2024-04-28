const chunkArray = (array, chunkSize) => {
    const chunkedArray = []

    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize))
    }

    return chunkedArray
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))