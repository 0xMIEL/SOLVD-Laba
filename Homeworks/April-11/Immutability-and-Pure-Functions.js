const calculateDiscountedPrice = (products, percentage) => {
    if (percentage < 0.01 || percentage > 100) {
        throw Error(
            'The price discount can be from 0.01% to a maximum of 100%!'
        )
    }

    const discountedProducts = products.map((product) => {
        return {
            ...product,
            price: Math.round(product.price * (100 - percentage)) / 100,
        }
    })

    return discountedProducts
}

const calculateTotalPrice = (products) => {
    const totalPrice = products.reduce((total, currentProduct) => {
        return total + currentProduct.price
    }, 0)

    return totalPrice
}

const products = [
    { name: 'UltraClean Vacuum', price: 299.99 },
    { name: 'Blasto Blender 5000', price: 125.0 },
    { name: 'SkyHigh Drone', price: 359.5 },
    { name: 'Quantum Laptop', price: 999.99 },
    { name: 'EcoSmart Lightbulb', price: 15.25 },
    { name: 'PureSound Headphones', price: 89.99 },
    { name: 'HydraWater Bottle', price: 22.5 },
    { name: 'Mystic Aroma Diffuser', price: 47.0 },
    { name: 'EverCool Air Conditioner', price: 450.0 },
    { name: 'Nova Smartwatch', price: 199.99 },
]

console.log(calculateDiscountedPrice(products, 15))
console.log(calculateTotalPrice(products))
