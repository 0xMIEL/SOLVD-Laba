const throttle = (func, interval) => {
    let lastExecution = 0

    return (...args) => {
        const now = Date.now()
        if (now - lastExecution >= interval) {
            func.apply(this, args)
            lastExecution = now
        }
    }
}

function onScroll(event) {
    console.log('Scroll event:', event)
}

const throttledScrollHandler = throttle(onScroll, 1000)

window.addEventListener('scroll', throttledScrollHandler)
