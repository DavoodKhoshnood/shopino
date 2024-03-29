import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Dav',
            email: 'admin@test.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Jack',
            email: 'jack@test.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            // _id: 1,
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 11,
            description: 'High quality shirt'
        },
        {
            // _id: 2,
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 8,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'High quality product'
        },
        {
            // _id: 3,
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 80,
            countInStock: 7,
            brand: 'Nike',
            rating: 4.2,
            numReviews: 16,
            description: 'High quality pants'
        },
        {
            // _id: 4,
            name: 'Adidas Slim Pant',
            slug: 'adidas-slim-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 75,
            countInStock: 9,
            brand: 'Adidas',
            rating: 4.6,
            numReviews: 18,
            description: 'High quality pants'
        },
        {
            // _id: 5,
            name: 'Hoodrich Tycoon T-Shirt',
            slug: 'hoodrich-tycoon-tshirt',
            category: 'Shirts',
            image: '/images/p5.jpg',
            price: 40,
            countInStock: 3,
            brand: 'Hoodrich',
            rating: 3.0,
            numReviews: 3,
            description: 'High quality T-Shirt'
        },
    ]
}

export default data