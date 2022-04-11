# React Google Book API

## Aim

The Google Books API was used to construct a web UI application using React.

## Live Site

**Deployed Site** : https://amx3.github.io/Google-Book-API/

![caption](./src/images/Google%20Book.gif)

## MVP:

1. Create a page that allows users to search for books
2. Page should include the following:
    - Header section introducing the page
    - Form containing a text input and a submit / search button
    - A grid of books

### Instructions:

-   When the submit button is clicked you need the request books from the Google books API using the input value as your query string
-   The books that you receive should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description
-   The grid should be responsive on different screen sizes
-   You should use async / await for your request code, NOT .then

### Bonus (optional, but highly recommended):

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Implementation Process

1. Created Containers (e.g. Navbar, Saved Books Page, BookGrid, Footer) and Components (e.g. Book and SearchBar).
2. Created an async/await function and utilised the useEffect hook to send a value to the Google Books API as a fetch query. Maximum books that are displayed is 40.
3. BookGrid is rendered with a book.

## Future Implementations

-   Include pagination, which allows users to navigate back and forth from the current page.
-   Handle error query
-   UI/UX design update

## Resources Used

-   Modal: https://www.npmjs.com/package/react-modal#installation
