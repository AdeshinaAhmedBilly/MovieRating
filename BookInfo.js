const book = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' };

// Function to get book info
function getBookInfo(book) {
  const { title, author } = book; // Destructure title and author
  return `${title} by ${author}`; // Return formatted string
}

// Call function and print the result
const result = getBookInfo(book);
console.log(result); // 👉 "The Great Gatsby by F. Scott Fitzgerald"
