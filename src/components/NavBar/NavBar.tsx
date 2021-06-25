import React from 'react'
import { useContext } from 'react'
import BookContext from '../../contexts/BookContext'
import classes from './NavBar.module.css'
const NavBar = () => {
    const {bookList} = useContext(BookContext)
    
    return (
        <nav className={classes["nav-bar"]}>
            <h1>Birdy's Reading List</h1>
            {bookList.length === 0 ? <p>You currently have no books to read :(</p> : <p>You have {bookList.length} books to read</p>}
        </nav>
    )
}

export default NavBar
