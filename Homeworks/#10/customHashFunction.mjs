// customHashFunction calculates hash code for input string
export const customHashFunction = string => {
    const prime1 = 31
    let hash = 0

    // iterate through characters of string to calculate hash
    for (let i = 0; i < string.length; i++) {
        // multiply current hash by prime1 and add character code
        hash = (hash * prime1 + string.charCodeAt(i)) & 0xffffffff
    }

    // ensure hash is positive integer
    return Math.abs(hash)
}
