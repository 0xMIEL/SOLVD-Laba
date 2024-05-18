/*
    1. a) Class Book is used for creating book object. Class constructor takes arguments: title, author, ISBN number, price and availability status.
    b) GenreBook class is used for specify specific genre of book.
*/

class Book {
    #title // store title of book
    #author // store author of book
    #ISBN // store ISBN number of book
    #price // store price of book
    #availability // store status of availability for book

    constructor(title, author, ISBN, price, availability) {
        this.#title = title
        this.#author = author
        this.#ISBN = ISBN
        this.#price = price
        this.#availability = availability
    }

    get title() {
        return this.#title
    }

    get author() {
        return this.#author
    }

    get ISBN() {
        return this.#ISBN
    }
    get price() {
        return this.#price
    }
    get availability() {
        return this.#availability
    }

    set title(newValue) {
        if (typeof newValue === 'string') this.#title = newValue

        throw TypeError()
    }

    set author(newValue) {
        if (typeof newValue === 'string') this.#author = newValue

        throw TypeError()
    }

    set ISBN(newValue) {
        if (typeof newValue === 'string' && typeof newValue === 'number') {
            this.#ISBN = newValue
        }

        throw TypeError()
    }

    set price(newValue) {
        if (typeof newValue === 'number') this.#price = newValue

        throw TypeError()
    }

    set availability(newValue) {
        if (typeof newValue === 'boolean') this.#availability = newValue

        throw TypeError()
    }

    discount(rate) { // is used for discounting price of product
        this.#price = BookPriceManager.discount(this.#price, rate)
    }
}

class GenreBook extends Book {
    #genre // store genre of book

    constructor(title, author, ISBN, price, availability, genre) {
        super(title, author, ISBN, price, availability)
        this.#genre = genre
    }

    get genre() {
        return this.#genre
    }

    set genre(newValue) {
        if (typeof newValue === 'string') this.#genre = newValue

        throw TypeError()
    }
}

/*
    2. Class User is used for creating book object. Class constructor takes arguments: name, email and user id number.
*/

class User {
    #name // store name of user
    #email // store email of user
    #id = Math.round(Math.random() * 10000000) // automatically generate random id of user
    #cart // store shopping cart for user
    #orderManager // store order manager for user

    constructor(name, email) {
        this.#name = name
        this.#email = email
        this.#cart = new Cart()
        this.#orderManager = new OrderManager()
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }

    get id() {
        return this.#id
    }

    get cart() {
        return this.#cart
    }

    get orderManager() {
        return this.#orderManager
    }

    set name(newValue) {
        if (typeof newValue === 'string') this.#name = newValue

        throw TypeError()
    }

    set email(newValue) {
        if (typeof newValue === 'string') this.#email = newValue

        throw TypeError()
    }

    set id(newValue) {
        throw Error('You cannot change id of any user!')
    }

    set cart(newValue) {
        if (newValue instanceof Cart) this.#cart = newValue

        throw TypeError()
    }

    set orderManager(newValue) {
        if (newValue instanceof OrderManager) this.#orderManager = newValue

        throw TypeError()
    }
}

/*
    3. a) Class PriceCalculator has static method that as argument take list of book and on the basis of that calculate total sum of books in that list.
    b) BookPriceManager class is used for managing book price.
*/

class PriceCalculator {
    static calculateTotalPrice(books) {
        // calculate total sum of book prices in list of books
        return books.reduce((accumulator, currentBook) => {
            return accumulator + currentBook.price
        }, 0)
    }
}

class BookPriceManager {
    static discount(price, rate) {
        if (rate > 0 && rate < 1) {
            return (price * (1 - rate)).toFixed(2)
        } else {
            throw RangeError()
        }
    }
}


/*
    4. Class Cart is used for initialize cart object. Moreover this object is able to manage removing and adding books.
*/

class Cart {
    #books = [] // store any book added to the cart

    get books() {
        return this.#books
    }

    set books(newValue) {
        throw Error('You cannot manually change contents of cart!')
    }

    addBook(book) {
        // add to the cart instance of Book class
        if (book instanceof Book) {
            this.books.push(book)
            return
        }

        throw Error('You are trying add something else than book!')
    }

    removeBook(book) {
        // remove book from cart
        if (!book instanceof Book) {
            throw Error('You are trying remve something else than book!')
        }

        const index = this.books.indexOf(book)

        if (index !== -1) {
            this.books.splice(index, 1)
            return
        }

        throw Error('There is no such book in cart!')
    }

    calculateTotalPrice() {
        // calculating total price of cart
        return PriceCalculator.calculateTotalPrice(this.books)
    }
}

/*
    5. Class Order is used for making orders. It takes as argument list of books.
*/

class Order {
    #books // store any book added to cart
    #totalPrice // store total price of order
    #orderTime = new Date() // automatically generate time of order

    constructor(books) {
        this.#books = books
        this.#totalPrice = PriceCalculator.calculateTotalPrice(this.books)
    }

    get books() {
        return this.#books
    }

    get totalPrice() {
        return this.#totalPrice
    }

    get orderTime() {
        return this.#orderTime
    }

    set books(newValue) {
        if (Array.isArray(newValue)) this.#books

        throw TypeError()
    }

    set orderTime(newValue) {
        throw new Error('You cannot change manually id of order time of order!')
    }
}

/*
    6. Class OrderManager is used for managing making and deleting orders.
*/

class OrderManager {
    #orders = [] // store all orders for specific user

    get orders() {
        return this.#orders
    }

    set orders(newValue) {
        throw Error('You cannot change manually content of order list!')
    }

    makeOrder(order) {
        // make order from instance of Order class
        if (order instanceof Order) {
            this.orders.push(order)
            return
        }

        throw Error('You are trying to add something else than order!')
    }

    removeOrder(order) {
        // remove order from queue
        if (!order instanceof Order) {
            throw Error('You are trying to remove something eles than order!')
        }

        const index = this.orders.indexOf(order)

        if (index !== -1) {
            this.orders.splice(index, 1)
            return
        }

        throw Error('There is no such order!')
    }
}

export { Book, GenreBook, User, Order } // class exporting

// In summary encapsulation is handled by setters and getters
