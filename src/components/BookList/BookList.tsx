import React from 'react'
import classes from './BookList.module.css'
import BookItem from './BookItem'
import BookContext from '../../contexts/BookContext'
import { useContext } from 'react'
const BookList = () => {
    const {bookList} = useContext(BookContext)

    return (
        <ul className={classes['book-list']}>
            {bookList.map(book => <BookItem book={book} key={book.id}/>)}
        </ul>
    )
}

export default BookList
