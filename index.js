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

// 8.
const people = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jenny',
        age: 25
    },
    {
        name: 'Peter',
        age: 17
    },
    {
        name: 'Sophie',
        age: 35
    }
]
const peopleLegalAge = (people) =>{
     people.forEach(e => {
        if(e.age >= 18){
            e.legalAge = true;
        } else {
            e.legalAge = false;
        }
     })
     return people;
}
console.log(peopleLegalAge(people));

//9.
const booksByAuthors = [
    {
        tittle: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
    },
    {
        tittle: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
    },
]
const booksAndAuthor = (booksByAuthors) => {
    let newArrayBooks = [];
    booksByAuthors.forEach(e => {
        newArrayBooks.push(e.tittle + ' - ' + e.author);
    })
    return newArrayBooks;
};
console.log(booksAndAuthor(booksByAuthors));

//10.
const objects = [
    {
        name: 'Juan',
        salary: 4.800,
        department: 'DEV'
    },
    {
        name: 'Maria',
        salary: 2.400,
        department: 'UX/UI'
    },
    {
        name: 'Jean',
        salary: 2.400,
        department: 'photographer'
    }
] 
const pullObjects = (objects) => {
    let newArray = []
    objects.forEach(e => {
        if(e.department){
           delete e.department
        }
    newArray.push(e);
   });
   return  newArray;
};
console.log(pullObjects(objects));

//11.
const books1 = [
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
const specificAuthorAndYear = (books1) => {
    let newArray = []
    books1.forEach(e => {
        if(e.year < 1990 && e.author === 'J.R.R. Tolkien'){
            newArray.push(e);
        };
    });
    return newArray;
};
console.log(specificAuthorAndYear(books1));

//12.
const peopleSumAge = [
    {
        name: 'Juan',
        age: 18
    },
    {
        name: 'Maria',
        age: 20
    },
    {
        name: 'Pablo',
        age: 10
    }
]
const sumAge = (peopleSumAge) => {
    let totalAge = 0
    peopleSumAge.forEach(e => {
        totalAge = totalAge + e.age
    })
    return totalAge
}
console.log(sumAge(peopleSumAge));

// 13.
const books2 = [
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
const filterBooks = (books2) => {
    let newArray = [];
    books2.forEach(e => {
        if(e.year > 2000 && e.pages > 300){
            newArray.push(e);
        };
        // if(e.year > 2000 && e.pages > 300) newArray.push(e);
    });
    return newArray;
};
console.log(filterBooks(books2));

// 14. 
const people1 = [
    {
        name: 'Juan',
        age: 18
    },
    {
        name: 'Laura',
        age: 30
    },
    {
        name: 'Miguel',
        age: 22
    }
]
const peopleOver18 = (people1) => {
    let total = 0;
    people1.forEach(e => {
        if(e.age > 18){
            total += 1
        }
    });
    return total;
};
console.log(peopleOver18(people1));

// 15.
const students = [
    {
        name: 'Juan',
        grade: 100
    },
    {
        name: 'Laura',
        grade: 60
    },
    {
        name: 'Sara',
        grade: 30
    }
]
const studentsExtraValue = (student) => {
        student.forEach(e => {
            if(e.grade >= 60 ){
              e.approved = true
            } else {
                e.approved = false
            };
        })
        return student
}
console.log(studentsExtraValue(students))

// 16. 
const vegetables = [
    {
        name: 'broccoli',
        price: 25
    },
    {
        name: 'tomato',
        price: 15
    },
    {
        name: 'carrot',
        price: 20
    }
]
const maximumProperty = (vegetable) => {
    let newArray = vegetables[0];
    vegetable.forEach(e => {
        if (e.price > newArray.price){
            newArray = e;
        };
    });
    return newArray;
};
console.log(maximumProperty(vegetables));

// 17.
const students1 = [
    {
        name: 'Juan',
        age: 18
    },
    {
        name: 'Laura',
        age: 30
    },
    {
        name: 'Miguel',
        age: 22
    }
];
const deleteProperty = (student) => {
    student.forEach(e => {
        delete e.age;
    });
    return student;
};
console.log(deleteProperty(students1));

// 18.
const employees = [
    {
        name: 'Juan',
        age: 18,
        department: 'sales'
    },
    {
        name: 'Laura',
        age: 30,
        department: 'design'
    },
    {
        name: 'Miguel',
        age: 22,
        department: 'sales'
    }
];
const filterEmployees = (employee) => {
    let newArray = []
    employee.forEach(e => {
        if(e.department === 'sales'){
            newArray.push(e)
        };
    });
    return newArray;
};
console.log(filterEmployees(employees));

// 19.
const objects1 = [
    {
        product: 'pants',
        amount: 5
    },
    {
        product: 'shoes',
        amount: 8
    },
    {
        product: 'pants',
        amount: 5
    },
    {
        product: 'pants',
        amount: 5
    },
]
const countingElements = (object) => {
    let newObject = {}
    object.forEach(e => {
        if(newObject[e.product]){
            newObject[e.product] += e.amount
        } else {
            newObject[e.product] = e.amount
        };
    });
    return newObject;
};
console.log(countingElements(objects1));

// 20.
const people2 = [
    {
        name: 'Juan',
        age: 18
    },
    {
        name: 'Nick',
        age: 17
    },
    {
        name: 'David',
        age: 20
    }
];
const peopleTotalAge = (ages) => {
    let totalAges = 0;
    ages.forEach(age => {
        if(age.age) {
            totalAges += age.age 
        };
    });
    return totalAges;
};
console.log(peopleTotalAge(people2));

// 21.
const products1 = [
    {
        name: 'Phone',
        price: 250
    },
    {
        name: 'Mouse',
        price: 50
    },
    {
        name: 'Laptop',
        price: 1500
    }
]
const myFunction = (products) => {
    let newArray = [];
    products.forEach(product => {
        if(product.price > 50){
            newArray.push(product)
        };
    });
    return newArray;
};
console.log(myFunction(products1));

// 22.
const objectProperty = [
    {
        name: 'Juan',
        grade: 5
    },
    {
        name: 'Nick',
        grade: 3
    },
    {
        name: 'Pablo',
        grade: 4
    }
];
const finedObjectsByProperty = (objects) => {
    let newArray = [];
    objects.forEach(object => {
        if(object.name === 'Juan'){
            newArray.push(object);
        } else {
            newArray.push(null);
        };
    });
    return newArray;
};
console.log(finedObjectsByProperty(objectProperty));

// 23.
const products2 = [
    {
        name: 'Phone',
        price: 250
    },
    {
        name: 'Mouse',
        price: 50
    },
    {
        name: 'Laptop',
        price: 1500
    }
];
const lessToHighPrice = (products) => {
    products.sort((a, b) => a.price - b.price);
    return products;
};
console.log(lessToHighPrice(products2));

// 24.
const people3 = [
    {
        name: 'Juan',
        age: 18
    },
    {
        name: 'Nick',
        age: 17
    },
    {
        name: 'David',
        age: 20
    }
];
const people4 = [
    {
        name: 'Juan',
        age: 18
    },
    {
        name: 'Nick',
        age: 17
    },
    {
        name: 'David',
        age: 20
    }
];
const newArray = people3.concat(people4);
console.log(newArray);
