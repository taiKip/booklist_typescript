
import classes from './BookItem.module.css'
import { Ibook } from '../../interfaces/IBook'
import { useContext } from 'react'
import BookContext from '../../contexts/BookContext'
const BookItem = ({ book }: { book: Ibook }) => {
   const {deletBook}= useContext(BookContext)
    const handleDelete = () => {
      
       deletBook(book.id)
    }
    return (
        <li className={classes["book-item"]} onClick={handleDelete}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </li>
    )
}

export default BookItem
