// Checking Array Membership with ‘includes’:

// Create an array of books containing different book.
const books = [
    'Clean Code: By Robert C. Martin',
    'The Mythical Man-month: By Frederick Brooks',
    'The Pragmatic Programmer: Your Journey to Mastery',
    'Code Complete (2 Edition): By Steve McConnell',
    'The Art of Computer Programming',
    'JavaScript: The Good Parts'
];

// Use the includes method to check if the array contains a javascript book.
const hasJsBook = books.includes('JavaScript: The Good Parts');

// Print a message to the console indicating whether the element is present in the array or not
if(hasJsBook){
    console.log('book is in the container');
}
else{
    console.log('book is not in the container');
}