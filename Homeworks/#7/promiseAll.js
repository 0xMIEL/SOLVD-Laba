const promiseAll = promises => {
    return new Promise((resolve, reject) => {
        const resolvedPromises = []
        let resolvedCount = 0

        if (promises.length === 0) {
            resolve(resolvedPromises)
            return
        }

        promises.forEach((promise, index) => {
            promise
                .then(result => {
                    resolvedPromises[index] = result
                    resolvedCount++

                    if (resolvedCount === promises.length) {
                        resolve(resolvedPromises)
                    }
                })
                .catch(error => reject(error))
        })
    })
}

const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

promiseAll(promises)
    .then(results => {
        console.log('All promises resolved:', results)
    })
    .catch(error => {
        console.error('At least one promise rejected:', error)
    })
