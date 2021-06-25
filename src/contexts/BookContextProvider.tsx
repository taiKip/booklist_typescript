import React, { ReactElement, useState,useEffect } from 'react'
import { Ibook } from '../interfaces/IBook'
import BookContext from './BookContext'

export const BookContextProvider = ({ children }: { children: ReactElement }) => {
    const storedBooks = localStorage.getItem("books")
   
    const [books, setBooks] = useState<Ibook[]>(storedBooks?JSON.parse(storedBooks):[])
    const addBookHandler = (book:Ibook) => {
        setBooks([book,...books])
    }
    
    const deleteBookHandler = (id: number) => {
        const newBookList = books.filter(book => book.id !== id)
        setBooks(newBookList)
    }
    useEffect(() => {
       localStorage.setItem("books",JSON.stringify(books))
        
    }, [books])
    return (
        <BookContext.Provider value={{bookList:books,setBooks:addBookHandler,deletBook:deleteBookHandler}}>
            {children}
        </BookContext.Provider>
    )
}
