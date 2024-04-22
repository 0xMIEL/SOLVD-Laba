const product = {}

Object.defineProperties(product, {
    name: {
        value: 'Laptop',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    price: {
        value: 1000,
        writable: false,
        enumerable: false,
        configurable: true,
    },
    quantity: {
        value: 5,
        writable: false,
        enumerable: false,
        configurable: true,
    },
})

console.log(Object.getOwnPropertyDescriptor(product, 'price'))

const getTotalPrice = product => {
    const priceDescriptor = Object.getOwnPropertyDescriptor(product, 'price')
    const quantityDescriptor = Object.getOwnPropertyDescriptor(
        product,
        'quantity'
    )

    if (priceDescriptor.enumerable && quantityDescriptor.enumerable) {
        return product.price * product.quantity
    }
    throw Error('Price and quantity must be a enumerable property!')
}

const deleteNonConfigurable = (object, property) => {
    if (Object.getOwnPropertyDescriptor(object, property).configurable) {
        delete object.property
    } else {
        throw Error("It isn't possible to delete non-cofigurable property")
    }
}

console.log(getTotalPrice(product))
deleteNonConfigurable(product, 'price')
