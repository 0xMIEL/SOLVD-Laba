const promiseAllSettled = promises => {
    return new Promise(resolve => {
        const promisesInfo = []
        let promisesCount = 0

        if (promises.length === 0) {
            resolve(promisesInfo)
        }

        promises.forEach((promise, index) => {
            promise
                .then(result => {
                    promisesInfo[index] = {
                        status: 'fulfilled',
                        value: result,
                    }
                })
                .catch(error => {
                    promisesInfo[index] = {
                        status: 'rejected',
                        reason: error,
                    }
                })
                .finally(() => {
                    promisesCount++

                    if (promisesCount === promises.length) {
                        resolve(promisesInfo)
                    }
                })
        })
    })
}

const promises = [
    Promise.resolve(1),
    Promise.reject('Error occurred'),
    Promise.resolve(3),
]

promiseAllSettled(promises).then(results => {
    console.log('All promises settled:', results)
})
