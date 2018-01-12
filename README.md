[shelf](https://shelf-by-brenhamill.herokuapp.com)
======

Shelf is a book rating and review web application designed with users in mind; it aims to provide a proof-of-concept for a web-app in which users need only minimally navigate to rate and review books. It also provides users with a scaffold to group their ratings in the form of user-created shelves and tags.

## Contents
[Features](#features) | [Technologies Used](#technologies-used) | [Highlighted Features](#highlighted-features) | [Project Plan](#project-plan)

## Features
  * Books
    * Users can view individual books, a book index, or search for books
    * Users can navigate smoothly to book views anywhere a book is shown
    * Both an individual user's book rating and average book ratings are displayed for any given book
  * Bookshelves
    * Bookshelves are user-defined collections of books, accessible to a user from any book view
    * Users are provided with three default bookshelves, one each for 'owned books', 'read books' and books users 'want to read'
  * Reviews
    * From a book view, users can leave in-depth text reviews
    * Anywhere a book is shown (excepting search), users can leave a 1-5 book rating that will contribute to a books average rating
  * Search
    * Users have access to a search bar, which allows users to search across Genres/Tags, Book Titles, or Authors
    * Search is always accessible and provides access straight to a book view page
  * Genres/Tags
    * Users can easily add and remove tags to books, which are then searchable

## Technologies Used
 * Backend
   * Database: PostgreSQL (v 0.18)
   * Rails (v 5.1.4) - Used purely for backend and app structure, including DB access, models, controller, & routing
   * Auth: hand-rolled using BCrypt (v 3.1.7)
   * AWS-SDK / Paperclip for book cover image hosting
 * Frontend
   * React (v 16.2.0) using a redux implementation pattern
   * jQuery used to make DOM interaction more accessible
   * Backend interaction done with jBuilder
   * Styling done with SCSS
   
   
 ## Highlighted Features
 
   Shelf components are designed to meet the goal of minimal navigation for maximum accessibility, and come with many modular features designed to let a user easily create or update their relationships between their profiles, books and bookshelves. Two are highlighted here:
   
 #### Bookshelf Add-Remove Dropdown
  
  The bookshelf add-remove dropdown is the component that allows users to add or remove books to their shelves. It pulls in shelves from its parent component and creates a checkbox component for each shelf; the checkbox component contains an addBookToShelf method, a removeBookFromShelf method, and a toggleDropdown method. The checkbox then checks the bookId against the passed-in shelf to identify its own default state and the next action it should take:
  
  ```
    toggleCheck(e) {
       if (this.state.isChecked) {
         this.props.toggleDropdown();
         this.props.removeBookFromShelf(this.shelf_membership);
         this.setState({ isChecked: false });
       } else {
         this.props.toggleDropdown();
         this.props.addBookToShelf(this.shelf_membership);
         this.setState({ isChecked: true });
       }
     }
  ```
  
  On creating a bookshelf membership, an AJAX request is sent to the database to automatically create a Rails association (ShelfMembership) between the book and the shelf; on removing a bookshelf membership, the AJAX request instead automatically deletes the rails association.
 
 #### Review Ratings
   The review rating component was designed to allow users to easily rate books outside of the individual book view. As users may or may not have rated a book, each rating component contains conditional logic to either update or create a review. The rating component is wrapped in a container that *connects* it to the store (using react-redux) where it will find a book and associated reviews using a bookId prop passed down from its parent, the BookItemDetails component. In the case of reviews, a selector was defined to pull out the current user's reviews, based on the bookId and the state's currentUser data:
   
   
    Passed-in state:
    
      ```book: state.entities.books[ownProps.bookId],
      currentUser: state.session.currentUser,
      review: selectBookReview(state, ownProps.bookId, state.session.currentUser.id),```
       
       
     Review selector (creates either a blank review template for the *create* review action, or the user review for the *update* action:
     
     ```selectBookReview = (state, bookId, userId) => {
           let book = state.entities.books[bookId];
           let blankReview = {
             book_id: bookId,
             user_id: userId,
             rating: 0,
             title: "",
             body: "",
           };
           if (book) {
             let review = book.reviews.filter( (review) => {
               return review.user_id === userId;
             })[0];
             if (review) {
               return review;
             } else {
               return blankReview;
             }
           } else {
             return blankReview;
           }
         };```
         
## Project Plan

Future updates to the app will include:
  * A tag show view, which groups together all books with matching tags
  * Tracking individual user tags, allowing users to keep a collection of their own tags, and displaying only the most common tags on the book show page
  * User profiles (including a user profile photo and recent activity)
  * User friend feed, showing users a list of their friends' recent book activities
    
