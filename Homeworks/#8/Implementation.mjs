import { Book, User, GenreBook, Order } from './Class-Design.mjs'

// book instances
const book1 = new GenreBook(
    'To Kill a Mockingbird',
    'Harper Lee',
    '9780061120084',
    12.99,
    true,
    'documental'
)

const book2 = new Book('1984', 'George Orwell', '9780451524935', 9.99, true)

const book3 = new GenreBook(
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    '9780743273565',
    14.99,
    false,
    'non-fiction'
)

const book4 = new GenreBook(
    'Pride and Prejudice',
    'Jane Austen',
    '9780141439518',
    7.99,
    true,
    'fiction'
)
const book5 = new Book(
    'The Catcher in the Rye',
    'J.D. Salinger',
    '9780316769488',
    10.99,
    true
)

// user instances
const user1 = new User('Alice Johnson', 'alice@example.com', 'ajohnson123')
const user2 = new User('Bob Smith', 'bob@example.com', 'bsmith456')
const user3 = new User('Charlie Brown', 'charlie@example.com', 'cbrown789')

// user1 operations
user1.cart.addBook(book1)
user1.cart.addBook(book4)
user1.cart.addBook(book5)
user1.cart.addBook(book2)
user1.cart.removeBook(book1)

const user1Order = new Order([book4, book5, book2])
user1.orderManager.makeOrder(user1Order)
user1.orderManager.makeOrder(user1Order)
user1.orderManager.removeOrder(user1Order)


// user2 operations
user2.cart.addBook(book2)
user2.cart.addBook(book3)
user2.cart.addBook(book4)
user2.cart.removeBook(book3)

const user2Order = new Order([book2, book4])
user2.orderManager.makeOrder(user2Order)
user2.orderManager.makeOrder(user2Order)
user2.orderManager.removeOrder(user2Order)


// user3 operations
user3.cart.addBook(book1)
user3.cart.addBook(book3)
user3.cart.addBook(book5)
user3.cart.removeBook(book3)

const user3Order = new Order([book1, book5])
user3.orderManager.makeOrder(user3Order)
user3.orderManager.makeOrder(user3Order)
user3.orderManager.removeOrder(user3Order)


book1.discount(0.2)
console.log(book1.price)