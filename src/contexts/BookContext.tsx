import { createContext } from "react";


import { Ibook } from "../interfaces/IBook";
type BookContextType = {
    bookList: Ibook[];
    setBooks: (book: Ibook) => void;
    deletBook: (id: number) => void;
}

const BookContext = createContext<BookContextType>({bookList:[],setBooks:(book)=>console.warn('no book provided'),deletBook:(id)=>console.warn('no id provided')})


export default BookContext;