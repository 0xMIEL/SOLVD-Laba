const debounce = (func, delay) => {
    let timeout
    return input => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(input), delay)
    }
}

function debouncedSearch(query) {
    console.log('Searching for:', query)
}

const debouncedSearchHandler = debounce(debouncedSearch, 300)

const inputElement = document.getElementById('search-input')
inputElement.addEventListener('input', event => {
    debouncedSearchHandler(event.target.value)
})
