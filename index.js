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
        status: 'pending'
    }
]
const tasksStatus = (tasks) => {
    let newArrayTasks = [];
    tasks.forEach(task => {
        if (task.id % 2 !== 0) 
            task.status = 'completed';
            newArrayTasks.push(task);
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

// 5.
const studentsEvaluation = [
    {
        name: 'John',
        grade: 7
    },
    {
        name: 'Jenny',
        grade: 5
    },
    {
        name: 'Peter',
        grade: 4
    },
    {
        name: 'Sophie',
        grade: 9
    }
]
const medianGrade = (studentsEvaluation) => {
    let newArrayStudents = 0;
    studentsEvaluation.forEach(elements => {
        newArrayStudents += elements.grade / studentsEvaluation.length;
    })
    return newArrayStudents;
}
console.log(medianGrade(studentsEvaluation));

// 6. 
const fruits = [
    {
        name: 'Apple',
    },
    {
        name: 'Banana',
    },
    {
        name: 'Orange',
    },
    {
        name: 'Apple',
    }
]
const fruitsRepeated = (fruits) => {
    let fruitsCount = 0;
    fruits.forEach(fruit => {
        if(fruit.name === 'Apple'){
            fruitsCount++;
        }
    })
    return fruitsCount;
};
console.log(fruitsRepeated(fruits));

// 7.
const transactions = [
    {
        category: 'Groceries',
        amount: 50
    },
    {
        category: 'Transport',
        amount: 30
    },
    {
        category: 'Groceries',
        amount: 20
    },
    {
        category: 'Transport',
        amount: 10
    }
]
const transactionsTotal = (transactions) => {
    let total = 0;
    transactions.forEach(transaction => {
        if(transaction.category === 'Groceries'){
            total = total + transaction.amount; // total += transaction.amount;
        }
    })
    return total;
}
console.log(transactionsTotal(transactions));