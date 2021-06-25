
import React, { useState } from 'react'
import { useContext } from 'react'
import BookContext from '../../contexts/BookContext'
import classes from './NewBookForm.module.css'
const NewBookForm = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const { setBooks } = useContext(BookContext)
    const handleTitle:React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setTitle(event.target.value)
    }
    const handleAuthor: React.ChangeEventHandler<HTMLInputElement> = (event) => {
setAuthor(event.target.value)
    }
    const handleSubmit = (event:any) => {
        event.preventDefault();
        setBooks({ id: Date.now(), author: author, title: title })
        setAuthor('');
        setTitle('');
    }
    return (
        <form className={classes['form']} onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" spellCheck required value={title} onChange={handleTitle}/>
            <input type="text" placeholder="author name" required value={author} onChange={handleAuthor}/>
            <button type="submit">add book</button>
        </form>
    )
}

export default NewBookForm
