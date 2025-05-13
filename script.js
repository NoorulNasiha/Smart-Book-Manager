document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    if (username === "admin" && password === "password123") {
        loginMessage.style.color = "green";
        loginMessage.textContent = "✅ Login Successful!";
        setTimeout(() => {
            window.location.href = "book_manager.html"; // Redirect to book manager page
        }, 1500);
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "❌ Invalid Username or Password!";
    }
});

/* Book Data */
const books = [
    { title: "Pride and Prejudice", author: "Jane Austen", category: "fiction", emoji: "📖" },
    { title: "1984", author: "George Orwell", category: "fiction", emoji: "📖" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", category: "fiction", emoji: "📖" },
    { title: "Dune", author: "Frank Herbert", category: "sci-fi", emoji: "🚀" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "fantasy", emoji: "🧙‍♂️" },
    { title: "Sherlock Holmes", author: "Arthur Conan Doyle", category: "mystery", emoji: "🔎" },
    { title: "Sapiens", author: "Yuval Noah Harari", category: "non-fiction", emoji: "📖" },
    { title: "Atomic Habits", author: "James Clear", category: "self-help", emoji: "🎯" },
    { title: "Zero to One", author: "Peter Thiel", category: "business", emoji: "🔢" }
];

/* Display Books */
function displayBooks(searchTerm = "", categoryFilter = "all") {
    const bookContainer = document.getElementById("bookContainer");
    bookContainer.innerHTML = "";

    books.forEach(book => {
        if (book.title.toLowerCase().includes(searchTerm) &&
            (categoryFilter === "all" || book.category === categoryFilter)) {
            
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");

            bookElement.innerHTML = `<h2>${book.emoji} ${book.title}</h2>
                                     <h3>✍️ ${book.author}</h3>`;
            bookContainer.appendChild(bookElement);
        }
    });
}

document.getElementById("searchBar")?.addEventListener("input", function() {
    displayBooks(this.value.toLowerCase());
});

document.getElementById("categoryFilter")?.addEventListener("change", function() {
    displayBooks("", this.value);
});

document.addEventListener("DOMContentLoaded", () => displayBooks());
