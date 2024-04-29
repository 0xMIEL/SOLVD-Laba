const throttle = (func, interval) => {
    let lastExecution = 0
    return () => {
        
    }
}

function onScroll(event) {
    console.log('Scroll event:', event)
}

const throttledScrollHandler = throttle(onScroll, 1000)

window.addEventListener('scroll', throttledScrollHandler)
