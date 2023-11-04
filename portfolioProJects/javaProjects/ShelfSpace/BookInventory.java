import java.io.*;
import java.util.*;

public class BookInventory {
    private static List<Book> books = new ArrayList<>();

    public static void main(String[] args) throws IOException {
        loadBooks();
        
        Scanner scanner = new Scanner(System.in);
        boolean quit = false;
        
        while (!quit) {
            System.out.println("Choose an action: (1) Add Book (2) List Books (3) Save and Quit");
            String action = scanner.nextLine();

            switch (action) {
                case "1":
                    addBook(scanner);
                    break;
                case "2":
                    listBooks();
                    break;
                case "3":
                    saveBooks();
                    quit = true;
                    break;
            }
        }
        
        scanner.close();
    }

    private static void addBook(Scanner scanner) {
        System.out.println("Enter title:");
        String title = scanner.nextLine();
        System.out.println("Enter author:");
        String author = scanner.nextLine();
        System.out.println("Enter ISBN:");
        String isbn = scanner.nextLine();
        System.out.println("Enter bookshelf location:");
        String bookshelf = scanner.nextLine(); // Get the bookshelf information from the user
    
        books.add(new Book(title, author, isbn, bookshelf)); // Include the bookshelf parameter
        System.out.println("Book added!");
    }

    private static void listBooks() {
        for (Book book : books) {
            System.out.println(book);
        }
    }

    private static void saveBooks() {
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("books.bin"))) {
            out.writeObject(books);
            System.out.println("Books saved!");
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Error saving books: " + e.getMessage());
        }
    }
    
    @SuppressWarnings("unchecked")
    private static void loadBooks() {
        File file = new File("books.bin");
        if (file.exists()) {
            try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(file))) {
                books = (List<Book>) in.readObject();
                System.out.println("Books loaded!");
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
                System.out.println("Book class not found: " + e.getMessage());
            } catch (IOException e) {
                e.printStackTrace();
                System.out.println("Error loading books: " + e.getMessage());
            }
        }
    }    
}


// * This file contains the BookInventory class with a main method, meaning it's the entry point for the Java application. 
// It holds a static list of Book objects called books to manage the inventory.

// * Here's what each part of the BookInventory class is doing:

// loadBooks(): This method is called at the beginning of the main method to load the list of books from a file named books.bin.
// It uses ObjectInputStream to read the list into the books variable.

// main method: This is the main loop of the application. It keeps running until the user chooses to "Save and Quit".
// It presents the user with three options: add a book, list books, or save and quit. 
// It uses a Scanner object to read the user's input from the console.

// addBook(Scanner scanner): This method prompts the user to enter details for a new book and adds it to the books list.

// listBooks(): This method iterates over the books list and prints out the details of each book using the toString method defined in the Book class.

// saveBooks(): This method saves the current state of the books list to the file books.bin. It uses ObjectOutputStream to write the list to the file.

// loadBooks(): As mentioned earlier, this method loads the book list from books.bin into the books list. 
// If the file does not exist, it simply means no books have been saved yet, and the method will end without doing anything.

// The try with resources syntax (try(...) { ... }) is used for both saveBooks and loadBooks to ensure that the file streams 
// are closed properly, regardless of whether an exception is thrown or not.

// The exception handling in both saveBooks and loadBooks catches IOException for any I/O errors and ClassNotFoundException,
// which could be thrown when casting the deserialized object to a List<Book>.

// Overall, this code sets up a simple command-line-based book inventory system that can add new books,
// list all books, and save/load the inventory to/from a file.