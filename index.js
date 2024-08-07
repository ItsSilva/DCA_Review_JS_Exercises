// 1.
const books = [
    {
        tittle: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        year: 1997,
        pages: 223
    },
    {
        tittle: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        year: 1954,
        pages: 1178
    },
    {
        tittle: 'Atonement',
        author: 'Ian McEwan',
        year: 2001,
        pages: 435
    }
]
const booksPublication = (books) => {
    let newArrayBooks = [];
  books.forEach(book => {
    if (book.year > 2000 && book.pages > 300) newArrayBooks.push(book);
  });
  return newArrayBooks;
};
console.log(booksPublication(books));

// 2.
const tasks = [
    {
        id: 0,
        description: 'Buy Groceries',
        status: 'pending'
    },
    {
        id: 1,
        description: 'Clean Bathroom',
        status: 'completed'
    },
    {
        id: 2,
        description: 'Study',
        status: 'pending'
    },
    {
        id: 3,
        description: 'Go to the gym',
        status: 'completed'
    }
]
const tasksStatus = (tasks) => {
    let newArrayTasks = [];
    tasks.forEach(task => {
        if (task.status === 'completed' && task.id % 2 !== 0) newArrayTasks.push(task);
    })
    return newArrayTasks;
}
console.log(tasksStatus(tasks));

// 3.
const products = [
    {
        name: 'Soap',
        price: 2
    },
    {
        name: 'Shampoo',
        price: 5
    },
    {
        name: 'Toothpaste',
        price: 3
    }
]
const productsMostExpensivePrice = (products) => {
    let newArrayProducts = products[0];
    products.forEach(products => {
        if(products.price > newArrayProducts.price){
            newArrayProducts = products;
        }
    })
    return newArrayProducts;
}
console.log(productsMostExpensivePrice(products));

// 4.
const tasksById = [
    {
        id: 0,
        description: 'Buy Groceries',
    },
    {
        id: 1,
        description: 'Clean Bathroom',
    },
    {
        id: 1,
        description: 'Clean Bathroom',
    },
    {
        id: 2,
        description: 'Go to the gym',
    }
]
const tasksByIdUnique = (tasksById) => {
    let repeatedIds = {};
    let uniqueIds = [];
    tasksById.forEach(task => {
        if(!repeatedIds[task.id]){
            repeatedIds[task.id] = true;
            uniqueIds.push(task);
        }
    });    
    return uniqueIds;
}
console.log(tasksByIdUnique(tasksById));
