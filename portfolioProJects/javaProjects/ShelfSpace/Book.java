import java.io.Serializable;

public class Book implements Serializable {
    private String title;
    private String author;
    private String isbn;
    private String bookshelf; // New property to store the bookshelf location

    // Constructor that includes the bookshelf parameter
    public Book(String title, String author, String isbn, String bookshelf) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.bookshelf = bookshelf;
    }

    // Getters and setters
    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getIsbn() {
        return isbn;
    }

    public String getBookshelf() {
        return bookshelf;
    }

    public void setBookshelf(String bookshelf) {
        this.bookshelf = bookshelf;
    }

    @Override
    public String toString() {
        return String.format(
            "Title: %-30s Author: %-20s ISBN: %-15s ShelfSpace: %-30s",
            title, author, isbn, bookshelf
        );
    }
}



// * This file defines a Book class which is marked as Serializable.
// Being serializable means that objects of this class can be converted into a byte stream and saved to a file or sent over a network.
// This is necessary for saving the state of objects to a file, as is done in your BookInventory class.

// * The Book class has three private instance variables: title, author, and isbn,
// which are strings representing the book's title, author, and International Standard Book Number, respectively.

// * It has a constructor that initializes these variables with values provided when a new Book object is created.

// * There are getter methods (getTitle, getAuthor, and getIsbn) for each of the variables, allowing other classes to retrieve their values.

// * The toString method is overridden to provide a string representation of a Book object, which is useful for printing out book details.