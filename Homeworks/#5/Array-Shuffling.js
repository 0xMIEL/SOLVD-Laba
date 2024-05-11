const customShuffle = array => {
    const shuffledArray = [...array]

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        console.log(j)
        const temporary = shuffledArray[i]
        shuffledArray[i] = shuffledArray[j]
        shuffledArray[j] = temporary
    }

    return shuffledArray
}

console.log(customShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
